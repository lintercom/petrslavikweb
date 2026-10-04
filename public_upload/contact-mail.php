<?php
declare(strict_types=1);

/** Shared delivery function used by the original form and the AI consultant. */
function sendContactMail(array $contact): bool
{
    $recipient = 'petrslavikweb@gmail.com';
    $subject = 'Nová poptávka z petrslavikweb.cz';
    $safeName = str_replace(["\r", "\n"], ' ', $contact['name']);
    $safeEmail = str_replace(["\r", "\n"], '', $contact['email']);
    $safeService = str_replace(["\r", "\n"], ' ', $contact['service']);
    $safePhone = str_replace(["\r", "\n"], ' ', $contact['phone'] ?? '');
    $body = implode("\r\n", [
        'Nová poptávka z webu petrslavikweb.cz', '',
        'Jméno: ' . $safeName, 'E-mail: ' . $safeEmail,
        'Telefon: ' . ($safePhone !== '' ? $safePhone : '-'),
        'Služba: ' . $safeService, '', 'Zpráva:', $contact['message'],
    ]);
    $headers = [
        'From: Petr Slavík web <noreply@petrslavikweb.cz>',
        'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
        'Content-Type: text/plain; charset=UTF-8', 'MIME-Version: 1.0',
    ];
    return mail($recipient, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));
}
