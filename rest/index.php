<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';

$app = new \Slim\App;
$app->post('/v1/contact', function (Request $request, Response $response, array $args) {
    $parsedBody = $request->getParsedBody();
    $name = isset($parsedBody['name']) ? $parsedBody['name'] : 'Name';
    $email = isset($parsedBody['email']) ? $parsedBody['email'] : 'Email';
    $message = isset($parsedBody['message']) ? $parsedBody['message'] : 'Message';
    sendEmail(escapeRequestData($name), escapeRequestData($email), escapeRequestData($message));
    return $response;
});

$app->run();

function escapeRequestData ($data) {
    $data = stripslashes($data);
    $data = htmlentities($data);
    $data = strip_tags($data);
    return $data;
}

function sendEmail ($name, $fron, $body) {
    $to = "jijojames18@gmail.com";
    $subject = "Contact Form [jijojames.com] : " . $name;

    $message = $body;

    $header  = "From:" . $from . " \r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";

    return mail ($to, $subject, $message, $header);
}