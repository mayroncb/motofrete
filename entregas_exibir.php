<?php

$usuario = "root";
$senha = "elaborata";
$server = "localhost";
$banco = "motofrete";

$dsn = "mysql:dbname=$banco;host=$server;charset=UTF8";

$con = new PDO($dsn, $usuario, $senha);

$id = $_GET["id"];

$sql = "SELECT * FROM entregas
        WHERE entregas.id = $id";

$res = $con->query($sql);

$dados = $res->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($dados[0]);
    

?>