<?php

$usuario = "root";
$senha = "elaborata";
$server = "localhost";
$banco = "motofrete";

$dsn = "mysql:dbname=$banco;host=$server;charset=UTF8";

$con = new PDO($dsn, $usuario, $senha);

$sql = "SELECT * FROM entregas";

$res = $con->query($sql);

$dados = $res->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($dados);
?>
