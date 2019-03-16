<?php
class SendEmail {

    private static $to = "jijojames18@gmail.com";
    private $name;
    private $from;
    private $message;

    function __construct($name, $email, $message) {
        $this->name = $name;
        $this->from = $email;
        $this->message = $message;

    }

    function send() {
        $subject = "Contact Form [jijojames.com] : " . $this->name;

        $header  = "From:" . $this->from . " \r\n";
        $header .= "MIME-Version: 1.0\r\n";
        $header .= "Content-type: text/html\r\n";

        return mail (self::$to, $subject, $this->message, $header);
    }
}