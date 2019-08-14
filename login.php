<?php

$usuario = "root";
$senha = "";
$server = "localhost";
$banco = "motofrete";

$dsn = "mysql:dbname=$banco;host=$server;charset=UTF8";

$con = new PDO($dsn, $usuario, $senha);

$login = $_POST["login"];
$senha = $_POST["senha"];

$sql = "SELECT * 
        FROM usuario 
        WHERE login='$login' AND senha='$senha'";

$res = $con->query($sql);

$dados = $res->fetchAll(PDO::FETCH_ASSOC);

if (count($dados) > 0) {
    echo "ok";
} else {
    echo "erro";
}