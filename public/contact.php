<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Nepovolená metoda požadavku.']);
    exit;
}

$honeypot = trim((string)($_POST['website'] ?? ''));
if ($honeypot !== '') {
    echo json_encode(['success' => true]);
    exit;
}

$name = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$phone = trim((string)($_POST['phone'] ?? ''));
$service = trim((string)($_POST['service'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));

if ($name === '' || $email === '' || $service === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Vyplňte prosím všechna povinná pole.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Zadejte prosím platný e-mail.']);
    exit;
}

$recipient = 'petrslavikweb@gmail.com';
$subject = 'Nová poptávka z petrslavikweb.cz';
$safeName = str_replace(["\r", "\n"], ' ', $name);
$safeEmail = str_replace(["\r", "\n"], '', $email);
$safeService = str_replace(["\r", "\n"], ' ', $service);
$safePhone = str_replace(["\r", "\n"], ' ', $phone);

$body = implode("\r\n", [
    'Nová poptávka z webu petrslavikweb.cz',
    '',
    'Jméno: ' . $safeName,
    'E-mail: ' . $safeEmail,
    'Telefon: ' . ($safePhone !== '' ? $safePhone : '-'),
    'Služba: ' . $safeService,
    '',
    'Zpráva:',
    $message,
]);

$headers = [
    'From: Petr Slavík web <noreply@petrslavikweb.cz>',
    'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0',
];

$sent = mail(
    $recipient,
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $body,
    implode("\r\n", $headers)
);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Zprávu se nepodařilo odeslat.']);
    exit;
}

echo json_encode(['success' => true]);
