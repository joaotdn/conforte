<?php
$form = $_POST['formData'];
$params = array();

parse_str($form, $params);

$nome = $params['nome'];
$email = $params['email'];
$tel1 = $params['telefone'];
$mensagem = $params['mensagem'];

if(
    empty($nome) &&
    empty($email) &&
    empty($tel1) &&
    empty($mensagem)
) { echo "false"; exit(); }

$remetente = "monica@lumenagencia.com.br";

$email_headers = implode ( "\n",array ( "From: $remetente", "Reply-To: $remetente", "Return-Path: $remetente","MIME-Version: 1.0","X-Priority: 3","Content-Type: text/html; charset=UTF-8" ) );

$msg = "<h2>Dados do solicitante</h2>\n";
$msg .= "<b>Nome: </b>{$nome}\n";
$msg .= "<b>E-mail: </b>{$email}\n";
$msg .= "<b>Telefone 1: </b>{$tel1}\n";
$msg .= "<b>Mensagem: </b>\n{$mensagem}";

if((mail($remetente, "Contato Conforte", nl2br($msg), $email_headers))) {
    echo "true";
} else {
    echo "false";
}

?>