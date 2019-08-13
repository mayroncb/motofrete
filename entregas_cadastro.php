<?php

$usuario = "root";
$senha = "elaborata";
$server = "localhost";
$banco = "motofrete";

$dsn = "mysql:dbname=$banco;host=$server;charset=UTF8";

$con = new PDO($dsn, $usuario, $senha);

$agora = new DateTime();

$valor = $_POST["valor"];
$entregador = $_POST["entregador"];
$endereco = $_POST["endereco"];

$sql = "INSERT INTO `entregas` 
            (`id`, 
            `data_cadastro`, 
            `data_modificado`, 
            `status`, 
            `endereco`, 
            `valor`, 
            `entregador`) 
        VALUES 
            (NULL, 
            '".$agora->format('Y-m-d H:i:s')."', 
            '".$agora->format('Y-m-d H:i:s')."', 
            'NOVO', 
            '$endereco', 
            '$valor', 
            '$entregador')";

if($con->exec($sql) === false)
{
    echo "erro";

}else {
    echo "ok";
}