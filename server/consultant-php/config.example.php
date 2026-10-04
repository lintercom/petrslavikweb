<?php
// Place in consultant-private/config.php outside public_html. Never commit a real key.
return [
    'CONSULTANT_MODE' => 'mock',
    'GEMINI_API_KEY' => '',
    'GEMINI_MODEL' => 'gemini-3.5-flash-lite',
    'CONSULTANT_MAIL_MODE' => 'test',
    // Public users in EEA require Google's active billing; enable after checking your project.
    'CONSULTANT_PUBLIC_ENABLED' => false,
    'CONSULTANT_MAX_INPUT' => 1500,
    'CONSULTANT_MAX_RESPONSE' => 3500,
    'CONSULTANT_MAX_MESSAGES' => 24,
    'CONSULTANT_SESSION_REQUESTS' => 12,
    'CONSULTANT_IP_REQUESTS' => 40,
    'CONSULTANT_LEAD_REQUESTS' => 5,
    'CONSULTANT_TIMEOUT_MS' => 15000,
    'CONSULTANT_OUTPUT_TOKENS' => 1200,
    'CONSULTANT_DAILY_CALLS' => 30,
    'CONSULTANT_DAILY_TOKEN_BUDGET' => 200000,
    'CONSULTANT_MONTHLY_BUDGET_USD' => '1',
];
