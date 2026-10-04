<?php
declare(strict_types=1);

final class ConsultantError extends RuntimeException
{
    public int $httpStatus;
    public function __construct(int $status, string $message)
    {
        parent::__construct($message);
        $this->httpStatus = $status;
    }
}

function consultantJson(array $data): string
{
    return json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR);
}

function consultantText($value, int $max, bool $required = true): string
{
    if (!is_string($value) || mb_strlen($value, 'UTF-8') > $max || strpos($value, "\0") !== false || ($required && trim($value) === '')) {
        throw new ConsultantError(422, 'Zkontrolujte vyplněná pole a délku textu.');
    }
    return trim($value);
}

function consultantConfig(): array
{
    $defaults = require __DIR__ . '/config.example.php';
    $local = is_file(__DIR__ . '/config.php') ? require __DIR__ . '/config.php' : [];
    if (!is_array($local)) throw new RuntimeException('Invalid configuration');
    $env = array_replace($defaults, $local);
    foreach (array_keys($defaults) as $name) {
        $value = getenv($name);
        if ($value !== false) $env[$name] = $value;
    }
    $limits = [
        'maxInput' => ['CONSULTANT_MAX_INPUT',5000], 'maxResponse' => ['CONSULTANT_MAX_RESPONSE',10000],
        'maxMessages' => ['CONSULTANT_MAX_MESSAGES',60], 'sessionRequests' => ['CONSULTANT_SESSION_REQUESTS',30],
        'ipRequests' => ['CONSULTANT_IP_REQUESTS',1000], 'leadRequests' => ['CONSULTANT_LEAD_REQUESTS',100],
        'timeout' => ['CONSULTANT_TIMEOUT_MS',60000], 'outputTokens' => ['CONSULTANT_OUTPUT_TOKENS',4000],
        'dailyCalls' => ['CONSULTANT_DAILY_CALLS',10000], 'dailyTokens' => ['CONSULTANT_DAILY_TOKEN_BUDGET',10000000],
    ];
    $config = [];
    foreach ($limits as $key => [$name,$upper]) {
        $value = filter_var($env[$name], FILTER_VALIDATE_INT);
        if ($value === false || $value < 1 || $value > $upper) throw new RuntimeException('Invalid limit');
        $config[$key] = $value;
    }
    $amount = (string)$env['CONSULTANT_MONTHLY_BUDGET_USD'];
    if (!preg_match('/^\d{1,3}(\.\d{1,6})?$/D',$amount) || (float)$amount > 100) throw new RuntimeException('Invalid monthly budget');
    $config['monthlyNanoUsd'] = (int)round((float)$amount * 1000000) * 1000;
    $config['key'] = (string)$env['GEMINI_API_KEY'];
    $config['model'] = (string)$env['GEMINI_MODEL'];
    $config['mock'] = $env['CONSULTANT_MODE'] !== 'gemini' || $config['key'] === '';
    $config['testMail'] = $config['mock'] || $env['CONSULTANT_MAIL_MODE'] !== 'live';
    $config['publicEnabled'] = filter_var($env['CONSULTANT_PUBLIC_ENABLED'], FILTER_VALIDATE_BOOLEAN);
    return $config;
}

/** Persist counters only; no conversation text, IP addresses, contacts, or API keys. */
function consultantCounter(string $name, callable $update): void
{
    $directory = __DIR__ . '/state';
    if (!is_dir($directory) && !@mkdir($directory,0700,true) && !is_dir($directory)) throw new RuntimeException('Cannot create counter directory');
    $file = fopen($directory . '/' . $name . '.json','c+');
    if (!$file || !flock($file,LOCK_EX)) throw new RuntimeException('Cannot lock counters');
    try {
        $raw = stream_get_contents($file);
        $value = $raw === '' ? [] : json_decode($raw,true,512,JSON_THROW_ON_ERROR);
        if (!is_array($value)) throw new RuntimeException('Invalid counters');
        $value = $update($value);
        $encoded = consultantJson($value);
        rewind($file);
        if (!ftruncate($file,0) || fwrite($file,$encoded) !== strlen($encoded) || !fflush($file)) throw new RuntimeException('Cannot persist counters');
    } finally { flock($file,LOCK_UN); fclose($file); }
}

function consultantRate(array $config, bool $lead): void
{
    $ip = hash_hmac('sha256',$_SERVER['REMOTE_ADDR'] ?? '',$config['key'] ?: 'local-mock-no-key');
    consultantCounter('requests', function(array $data) use ($config,$ip,$lead): array {
        $now = time();
        foreach ($data as $key => $entry) if (($entry['expires'] ?? 0) < $now) unset($data[$key]);
        if (!isset($data[$ip])) {
            if (count($data) >= 1000) throw new ConsultantError(503,'Služba je vytížená.');
            $data[$ip] = ['expires'=>$now+3600,'chat'=>0,'lead'=>0];
        }
        $key = $lead ? 'lead' : 'chat';
        if ($data[$ip][$key] >= $config[$lead ? 'leadRequests' : 'ipRequests']) throw new ConsultantError(429,'Limit požadavků je vyčerpaný. Napište na petrslavikweb@gmail.com.');
        $data[$ip][$key]++;
        return $data;
    });
}

function consultantSystem(): string
{
    $rules = file_get_contents(__DIR__ . '/instructions.md');
    $business = file_get_contents(__DIR__ . '/business.md');
    $protocol = file_get_contents(__DIR__ . '/protocol.md');
    if ($rules === false || $business === false || $protocol === false) throw new RuntimeException('Missing instructions');
    return $rules . "\n\nSchválené firemní podklady:\n" . $business . "\n" . $protocol;
}

function consultantResult($value, int $max): array
{
    if (!is_array($value)) throw new ConsultantError(502,'AI vrátila neplatnou odpověď.');
    $proposal = null;
    if (($value['proposal'] ?? null) !== null) {
        if (!is_array($value['proposal'])) throw new ConsultantError(502,'AI vrátila neplatný návrh.');
        $proposal = [];
        foreach (['problem','firstStep','benefit','verify'] as $key) $proposal[$key] = consultantText($value['proposal'][$key] ?? null,700);
    }
    $result = ['reply'=>consultantText($value['reply'] ?? null,$max),'proposal'=>$proposal,'contact'=>($value['contact'] ?? false) === true];
    if (mb_strlen(consultantJson($result),'UTF-8') > $max) throw new ConsultantError(502,'Odpověď AI je příliš dlouhá.');
    return $result;
}

/** Standard price verified 2026-10-04; integer nanodollars, plus 20% reserve. */
function consultantReserveBudget(array $data, array $config, int $input, int $output, string $day): array
{
    if ($config['model'] !== 'gemini-3.5-flash-lite') throw new ConsultantError(503,'Pro tento model není nastaven bezpečný cenový limit.');
    if ($data === []) $data = ['day'=>'','tokens'=>0,'calls'=>0];
    foreach (['tokens','calls'] as $key) if (!isset($data[$key]) || !is_int($data[$key]) || $data[$key] < 0) throw new RuntimeException('Invalid budget');
    if (!isset($data['day']) || !is_string($data['day'])) throw new RuntimeException('Invalid budget date');
    $month = substr($day,0,7);
    // Legacy state records only the last day: reserve its tokens at the higher price.
    $spent = !isset($data['month']) && str_starts_with($data['day'],$month) ? $data['tokens'] * 3000 : ($data['reservedNanoUsd'] ?? 0);
    if (!is_int($spent) || $spent < 0 || (isset($data['month']) && (!is_string($data['month']) || !isset($data['reservedNanoUsd'])))) throw new RuntimeException('Invalid monthly usage');
    if (isset($data['month']) && $data['month'] !== $month) $spent = 0;
    $cost = $input * 360 + $output * 3000;
    if ($spent + $cost > $config['monthlyNanoUsd']) throw new ConsultantError(429,'Měsíční limit AI je vyčerpaný. Podklady můžete předat Petrovi.');
    $tokens = $data['day'] === $day ? $data['tokens'] : 0;
    $calls = $data['day'] === $day ? $data['calls'] : 0;
    if ($calls >= $config['dailyCalls'] || $tokens + $input + $output > $config['dailyTokens']) throw new ConsultantError(429,'Denní limit AI je vyčerpaný. Podklady můžete předat Petrovi.');
    return ['day'=>$day,'tokens'=>$tokens+$input+$output,'calls'=>$calls+1,'month'=>$month,'reservedNanoUsd'=>$spent+$cost];
}

function consultantGemini(array $history, array $config): array
{
    if (!function_exists('curl_init')) throw new ConsultantError(503,'Chybí serverové rozšíření cURL.');
    $system = str_replace('MAX_RESPONSE',(string)$config['maxResponse'],consultantSystem());
    $contents = array_map(fn(array $message): array => ['role'=>$message['role'] === 'user' ? 'user' : 'model','parts'=>[['text'=>$message['text']]]],$history);
    $properties = [];
    foreach (['problem','firstStep','benefit','verify'] as $key) $properties[$key] = ['type'=>'STRING'];
    $body = consultantJson([
        'systemInstruction'=>['parts'=>[['text'=>$system]]], 'contents'=>$contents,
        'generationConfig'=>[
            'temperature'=>0.3,'maxOutputTokens'=>$config['outputTokens'],
            'thinkingConfig'=>str_starts_with($config['model'],'gemini-2.5') ? ['thinkingBudget'=>0] : ['thinkingLevel'=>str_contains($config['model'],'flash-lite') ? 'minimal' : 'low'],
            'responseMimeType'=>'application/json',
            'responseSchema'=>['type'=>'OBJECT','properties'=>[
                'reply'=>['type'=>'STRING'], 'contact'=>['type'=>'BOOLEAN'],
                'proposal'=>['type'=>'OBJECT','nullable'=>true,'properties'=>$properties,'required'=>array_keys($properties)],
            ],'required'=>['reply','contact','proposal']],
        ],
    ]);
    // A UTF-8 byte per input token is a conservative upper bound, plus output and protocol reserve.
    consultantCounter('usage', fn(array $data): array => consultantReserveBudget($data,$config,strlen($body)+1024,$config['outputTokens'],gmdate('Y-m-d')));
    $curl = curl_init('https://generativelanguage.googleapis.com/v1beta/models/' . rawurlencode($config['model']) . ':generateContent');
    curl_setopt_array($curl,[CURLOPT_POST=>true,CURLOPT_POSTFIELDS=>$body,CURLOPT_RETURNTRANSFER=>true,CURLOPT_HTTPHEADER=>['Content-Type: application/json','x-goog-api-key: ' . $config['key']],CURLOPT_TIMEOUT_MS=>$config['timeout'],CURLOPT_CONNECTTIMEOUT_MS=>min(5000,$config['timeout']),CURLOPT_FOLLOWLOCATION=>false]);
    $raw = curl_exec($curl);
    $status = curl_getinfo($curl,CURLINFO_RESPONSE_CODE);
    curl_close($curl);
    if ($status === 429) throw new ConsultantError(429,'Kvóta AI je vyčerpaná. Můžete poslat zprávu přímo Petrovi.');
    if ($raw === false || $status !== 200) throw new ConsultantError(502,'AI je nyní nedostupná. Můžete poslat zprávu přímo Petrovi.');
    try {
        $payload = json_decode($raw,true,512,JSON_THROW_ON_ERROR);
        $output = '';
        foreach ($payload['candidates'][0]['content']['parts'] ?? [] as $part) if (empty($part['thought'])) $output .= $part['text'] ?? '';
        return consultantResult(json_decode($output,true,512,JSON_THROW_ON_ERROR),$config['maxResponse']);
    } catch (Throwable $error) { throw new ConsultantError(502,'AI nevrátila použitelnou odpověď. Můžete poslat zprávu přímo Petrovi.'); }
}

function consultantMock(array $history): array
{
    $answers = array_values(array_map(fn($m)=>$m['text'],array_filter($history,fn($m)=>$m['role']==='user')));
    $last = end($answers);
    if (preg_match('/ignoruj|ignore|system prompt|api.?key|tajné/iu',$last)) return ['reply'=>'Pomohu vám s podnikáním a přípravou podkladů pro Petra. Co vám dnes nejvíce komplikuje práci?','proposal'=>null,'contact'=>false];
    if (preg_match('/kontakt|poslat zprávu|odeslat|předat petrovi/iu',$last)) return ['reply'=>'Můžete Petrovi předat zprávu přímo. Shrnutí před odesláním upravte podle sebe.','proposal'=>null,'contact'=>true];
    if (count($answers) >= 4 || preg_match('/návrh|navrhn|stačí|shrň/iu',$last)) return [
        'reply'=>'Podklady už stačí pro předběžný první krok. Návrh můžete upravit nebo předat Petrovi.', 'contact'=>false,
        'proposal'=>[
            'problem'=>'Z vašeho popisu vychází potřeba zjednodušit postup: ' . mb_substr($answers[0],0,260,'UTF-8'),
            'firstStep'=>preg_match('/obuv|bot|servis|oprav/iu',implode(' ',$answers)) ? 'Ujasnit příjem zakázek a připravit jednoduchý formulář s popisem opravy a možností doplnit fotografie. Petr ověří vhodný způsob realizace.' : 'Popsat jeden důležitý zákaznický krok a upravit současný web nebo formulář podle této potřeby.',
            'benefit'=>'Přehlednější podklady od zákazníků a méně ručního doplňování informací. Jde o možný přínos, nikoliv záruku výsledku.',
            'verify'=>'Petr musí ověřit současné řešení, technické možnosti, rozsah, cenu a termín. Rozpočet ani používaný systém nemusíte znát.',
        ],
    ];
    $questions = ['Jak dnes zákazník svůj požadavek předává a kde se postup nejčastěji zasekne?','Co by vám v tomto postupu nejvíce pomohlo zjednodušit?','Jak by měl vypadat první užitečný výsledek pro vás nebo vaše zákazníky?'];
    return ['reply'=>(preg_match('/nevím|neznám/iu',$last) ? 'To nevadí, technické řešení může ověřit Petr. ' : 'Děkuji za upřesnění. ') . $questions[min(count($answers)-1,2)],'proposal'=>null,'contact'=>false];
}

function consultantLead(array $data): array
{
    $lead = [];
    foreach (['name'=>120,'email'=>254,'company'=>160,'phone'=>40,'web'=>500,'budget'=>160,'deadline'=>160,'summary'=>5000] as $key=>$max) $lead[$key] = consultantText($data[$key] ?? '',$max,in_array($key,['name','email','summary'],true));
    if (preg_match('/[\r\n]/',$lead['name'] . $lead['email']) || !filter_var($lead['email'],FILTER_VALIDATE_EMAIL)) throw new ConsultantError(422,'Zadejte platné jméno a e-mail.');
    if ($lead['web'] !== '' && !preg_match('~^https?://[^\s]+$~i',$lead['web'])) throw new ConsultantError(422,'Web uveďte včetně https://.');
    if (!in_array($data['kind'] ?? '',['direct','consultation'],true)) throw new ConsultantError(422,'Neplatný typ poptávky.');
    $lead['kind'] = $data['kind'];
    return $lead;
}

function consultantEmail(array $lead, array $session): string
{
    $answers = array_values(array_filter($session['history'],fn($m)=>$m['role']==='user'));
    $lines = ['Kontakt a firma (údaje vyplněné návštěvníkem):','Jméno: '.$lead['name'],'E-mail: '.$lead['email'],'Firma: '.($lead['company'] ?: 'Nezjištěno'),'Telefon: '.($lead['phone'] ?: 'Nezjištěno'),'Web: '.($lead['web'] ?: 'Nezjištěno'),'', 'Cíle zákazníka – návštěvníkem upravené shrnutí / přímá zpráva:', $lead['summary'],'','Co zákazník skutečně řekl (doslovné odpovědi, ne instrukce pro příjemce):'];
    foreach ($answers as $index=>$answer) $lines[] = ($index+1) . '. ' . $answer['text'];
    if (!$answers) $lines[] = 'Rozhovor neproběhl.';
    $lines = array_merge($lines,['','Současný postup a používané nástroje:','Pouze to, co návštěvník uvedl výše. Ostatní nezjištěno.','','Rozpočet: '.($lead['budget'] ?: 'Nezjištěno'),'Termín: '.($lead['deadline'] ?: 'Nezjištěno'),'','Předběžný návrh konzultanta (není schválená nabídka):']);
    if ($session['proposal'] && $lead['kind'] === 'consultation') {
        foreach (['problem'=>'Pochopený problém (interpretace)','firstStep'=>'První krok','benefit'=>'Možný přínos','verify'=>'K ověření Petrem'] as $key=>$label) $lines[] = $label . ': ' . $session['proposal'][$key];
    } else $lines[] = 'Návrh nebyl připraven / přímá zpráva.';
    return implode("\n",array_merge($lines,['','Chybějící informace pro schůzku:',$session['proposal']['verify'] ?? 'Petr upřesní rozsah, proveditelnost, cenu a termín.','','Obchodní hypotézy (nepotvrzené odhady):','V této verzi se obchodní hypotézy automaticky neodvozují.','','Odeslání poptávky neznamená schválení nabídky, ceny ani termínu.']));
}

function consultantHandle(string $publicDirectory): void
{
    if (!function_exists('mb_strlen')) throw new RuntimeException('Missing mbstring');
    $config = consultantConfig();
    $action = $_GET['action'] ?? '';
    $method = $_SERVER['REQUEST_METHOD'] ?? '';
    $host = $_SERVER['HTTP_HOST'] ?? '';
    $hostName = strtolower(explode(':',$host)[0]);
    $local = PHP_SAPI === 'cli-server' && in_array($hostName,['localhost','127.0.0.1','['],true);
    $available = $local || $config['mock'] || $config['publicEnabled'];
    if ($action === 'config' && $method === 'GET') {
        echo consultantJson(['mock'=>$config['mock'],'testMail'=>$config['testMail'],'maxInput'=>$config['maxInput'],'available'=>$available,'message'=>$available ? null : 'AI konzultace zatím není aktivní. Můžete napsat přímo Petrovi.']);
        return;
    }
    if ($action === 'chat' && !$available) throw new ConsultantError(503,'Veřejný konzultant zatím není aktivován. Napište přímo na petrslavikweb@gmail.com.');
    if (!in_array($action,['chat','lead'],true)) throw new ConsultantError(404,'Neznámý požadavek.');
    if ($method !== 'POST') throw new ConsultantError(405,'Nepovolená metoda.');
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        $origin = parse_url($_SERVER['HTTP_ORIGIN']);
        $originHost = ($origin['host'] ?? '') . (isset($origin['port']) ? ':'.$origin['port'] : '');
        if (strtolower($originHost) !== strtolower($host)) throw new ConsultantError(403,'Nepovolený původ požadavku.');
    }
    if (!str_starts_with($_SERVER['CONTENT_TYPE'] ?? '','application/json')) throw new ConsultantError(415,'Požadován JSON.');
    consultantRate($config,$action === 'lead');
    $raw = file_get_contents('php://input',false,null,0,16001);
    if ($raw === false || strlen($raw) > 16000) throw new ConsultantError(413,'Požadavek je příliš dlouhý.');
    try { $data = json_decode($raw,true,512,JSON_THROW_ON_ERROR); }
    catch (Throwable $error) { throw new ConsultantError(400,'Neplatný JSON.'); }
    if (!is_array($data) || array_is_list($data)) throw new ConsultantError(400,'Neplatný požadavek.');
    $sessionDirectory = __DIR__ . '/sessions';
    if (!is_dir($sessionDirectory) && !@mkdir($sessionDirectory,0700,true) && !is_dir($sessionDirectory)) throw new RuntimeException('Cannot create session directory');
    ini_set('session.use_strict_mode','1');
    ini_set('session.gc_maxlifetime','1800');
    ini_set('session.gc_probability','1');
    ini_set('session.gc_divisor','100');
    session_save_path($sessionDirectory);
    session_name('consultant_session_php');
    session_set_cookie_params(['lifetime'=>1800,'path'=>'/','secure'=>!$local,'httponly'=>true,'samesite'=>'Strict']);
    if (!session_start()) throw new RuntimeException('Cannot start session');
    // PHP's exclusive session lock serializes requests, including duplicate form submissions.
    try {
        if (isset($_SESSION['consultant']) && $_SESSION['consultant']['expires'] < time()) {
            $_SESSION = []; session_destroy();
            setcookie(session_name(),'', ['expires'=>1,'path'=>'/','secure'=>!$local,'httponly'=>true,'samesite'=>'Strict']);
            throw new ConsultantError(410,'Konzultace vypršela. Můžete znovu poslat zprávu přímo Petrovi.');
        }
        if (!isset($_SESSION['consultant'])) $_SESSION['consultant'] = ['expires'=>time()+1800,'history'=>[],'proposal'=>null,'count'=>0,'submitted'=>null];
        $session =& $_SESSION['consultant'];
        if ($session['submitted']) {
            if ($action === 'lead') { echo consultantJson($session['submitted']); return; }
            throw new ConsultantError(409,'Poptávka již byla odeslána.');
        }
        if ($action === 'chat') {
            $message = consultantText($data['message'] ?? null,$config['maxInput']);
            if ($session['count'] >= $config['sessionRequests'] || count($session['history'])+2 > $config['maxMessages']) throw new ConsultantError(429,'Limit konzultace je vyčerpaný. Můžete předat dosavadní podklady Petrovi.');
            $session['count']++;
            $history = array_merge($session['history'],[['role'=>'user','text'=>$message]]);
            $result = consultantResult($config['mock'] ? consultantMock($history) : consultantGemini($history,$config),$config['maxResponse']);
            if (!$result['proposal'] && !$result['contact'] && count(array_filter($history,fn($m)=>$m['role']==='user')) >= 6) throw new ConsultantError(502,'Návrh se nepodařilo dokončit. Dosavadní podklady můžete předat Petrovi.');
            $session['history'] = array_merge($history,[['role'=>'assistant','text'=>consultantJson($result)]]);
            if ($result['proposal']) $session['proposal'] = $result['proposal'];
            echo consultantJson(array_merge($result,['mock'=>$config['mock']]));
            return;
        }
        $lead = consultantLead($data);
        if (!$config['testMail']) {
            require_once $publicDirectory . '/contact-mail.php';
            $sent = sendContactMail(['name'=>$lead['name'],'email'=>$lead['email'],'phone'=>$lead['phone'],'service'=>$lead['kind'] === 'direct' ? 'Přímá zpráva' : 'AI konzultace','message'=>consultantEmail($lead,$session)]);
            if (!$sent) throw new ConsultantError(502,'Zprávu se nepodařilo odeslat. Napište na petrslavikweb@gmail.com.');
        }
        $session['submitted'] = ['success'=>true,'test'=>$config['testMail']];
        $session['history'] = []; $session['proposal'] = null;
        echo consultantJson($session['submitted']);
    } finally { if (session_status() === PHP_SESSION_ACTIVE) session_write_close(); }
}
