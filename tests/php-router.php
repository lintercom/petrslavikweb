<?php
// Only for local tests, never uploaded. The built-in PHP server does not read .htaccess.
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
if (preg_match('~^/api/consultant/(config|chat|lead)/?$~',$path,$match)) {
    $_GET['action'] = $match[1];
    require $_SERVER['DOCUMENT_ROOT'] . '/consultant.php';
    return true;
}
if (is_file($_SERVER['DOCUMENT_ROOT'] . $path)) return false;
if (is_file($_SERVER['DOCUMENT_ROOT'] . rtrim($path,'/') . '/index.html')) {
    readfile($_SERVER['DOCUMENT_ROOT'] . rtrim($path,'/') . '/index.html');
    return true;
}
readfile($_SERVER['DOCUMENT_ROOT'] . '/index.html');
