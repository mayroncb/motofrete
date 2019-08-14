<?php

$usuario = "root";
$senha = "";
$server = "localhost";
$banco = "motofrete";

$dsn = "mysql:dbname=$banco;host=$server;charset=UTF8";

$con = new PDO($dsn, $usuario, $senha);

$coluna = (isset($_GET["campo"]) && $_GET["campo"] != "") ? $_GET["campo"] : "id";
$ord = (isset($_GET["ord"]) && $_GET["ord"] != "") ? $_GET["ord"] : "ASC";

$where = "";

if ( isset($_GET['filtro']) && $_GET['filtro']["valor"] != "0")
{
    $filtroColuna = $_GET['filtro']["coluna"];
    $filtroValor = $_GET['filtro']["valor"];
    $where = "AND $filtroColuna = '$filtroValor' ";
}

$sql = "SELECT entregas.id, entregas.data_cadastro, 
        entregas.data_modificado, entregas.status,
        responsavel.nome
        FROM entregas, responsavel
        WHERE entregas.entregador = responsavel.id
        $where
        ORDER BY $coluna $ord";

$res = $con->query($sql);

$dados = $res->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($dados);
?>
