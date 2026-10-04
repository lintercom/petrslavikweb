<?php
declare(strict_types=1);
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

// FTP upload: this directory must be alongside public_html, never inside it.
$runtime = dirname(__DIR__) . '/consultant-private/runtime.php';
if (!is_file($runtime)) {
    http_response_code(503);
    echo json_encode(['message' => 'Konzultant není nakonfigurován. Napište přímo na petrslavikweb@gmail.com.']);
    exit;
}
try {
    require_once $runtime;
    consultantHandle(__DIR__);
} catch (Throwable $error) {
    http_response_code($error instanceof ConsultantError ? $error->httpStatus : 503);
    echo json_encode(['message' => $error instanceof ConsultantError ? $error->getMessage() : 'Služba je nyní nedostupná. Napište přímo na petrslavikweb@gmail.com.'], JSON_UNESCAPED_UNICODE);
}
