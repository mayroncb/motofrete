<?php
    $usuario = "root";
    $senha = "";
    $server = "localhost";
    $banco = "motofrete";
    $dsn = "mysql:dbname=$banco;host=$server;charset=UTF8";
    $con = new PDO($dsn, $usuario, $senha);
    $id = $_POST["id"];
    $status = $_POST["status"];
    $entregador = $_POST["entregador"];
    $agora = new DateTime();
    $sql = "UPDATE entregas 
            SET data_modificado = '". $agora->format('Y-m-d H:i:s') ."', 
            status = '$status', 
            entregador = '$entregador' 
            WHERE id = $id";
            
    if($con->exec($sql) === false)
    {
        echo "erro";
    } else {
        echo "ok";
    } 