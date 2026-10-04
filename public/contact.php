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

require_once __DIR__ . '/contact-mail.php';
$sent = sendContactMail([
    'name' => $name, 'email' => $email, 'phone' => $phone,
    'service' => $service, 'message' => $message,
]);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Zprávu se nepodařilo odeslat.']);
    exit;
}

echo json_encode(['success' => true]);
