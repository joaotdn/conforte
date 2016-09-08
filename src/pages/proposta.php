<?php
$form = $_POST['formData'];
$params = array();

parse_str($form, $params);

$nome = $params['nome'];
$email = $params['email'];
$tel1 = $params['tel1'];
$tel2 = $params['tel2'];
$cnome = $params['cnome'];
$ctipo = $params['ctipo'];
$cunids = $params['cunids'];
$clocal = $params['clocal'];
$ccidade = $params['ccidade'];
$cuf = $params['cuf'];
$capts = $params['capts'];

if(
    empty($nome) ||
    empty($email) ||
    empty($tel1) ||
    empty($tel2) ||
    empty($cnome) ||
    empty($ctipo) ||
    empty($cunids) ||
    empty($clocal) ||
    empty($ccidade) ||
    empty($cuf)
) { echo "false"; exit(); }

$remetente = "proposta@conforte.com.br";
$email_headers = implode ( "\n",array ( "From: $remetente", "Reply-To: $remetente", "Return-Path: $remetente","MIME-Version: 1.0","X-Priority: 3","Content-Type: text/html; charset=UTF-8" ) );

$msg = "<h2>Dados do solicitante</h2>\n";
$msg .= "<b>Nome: </b>{$nome}\n";
$msg .= "<b>E-mail: </b>{$email}\n";
$msg .= "<b>Telefone 1: </b>{$tel1}\n";
$msg .= "<b>Telefone 2: </b>{$tel2}\n";

$msg .= "<h2>Dados do condomínio</h2>\n";
$msg .= "<b>Nome: </b>{$cnome}\n";
$msg .= "<b>Tipo: </b>{$ctipo}\n";
$msg .= "<b>Qtd. de undades: </b>{$cunids}\n";
$msg .= "<b>Endereço: </b>{$clocal}\n";
$msg .= "<b>Cidade: </b>{$ccidade}\n";
$msg .= "<b>Estado: </b>{$cuf}\n";
//$msg .= "<b>Número de apartamentos: </b>{$capts}\n";

if((mail($remetente, "Solicitação de Proposta Conforte", nl2br($msg), $email_headers))) {
    echo "true";
} else {
    echo "false";
}

exit();

?>