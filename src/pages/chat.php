<?php
$form = $_POST['formData'];
$params = array();

parse_str($form, $params);

$email = $params['email'];
$msg = $params['msg'];

if(
    empty($email) ||
    empty($msg)
) { echo "false"; exit(); }

$remetente = "contato@conforte.com.br";

$email_headers = implode ( "\n",array ( "From: $remetente", "Reply-To: $remetente", "Return-Path: $remetente","MIME-Version: 1.0","X-Priority: 3","Content-Type: text/html; charset=UTF-8" ) );

$msg = "<h2>Mensagem:</h2>\n";
$msg .= "<b>E-mail: </b>{$email}\n";
$msg .= "<b>Mensagem: </b>\n{$msg}";

if((mail($remetente, "Chat de vendas Conforte", nl2br($msg), $email_headers))) {
    echo "true";
} else {
    echo "false";
}

?>