<?php

    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

    $get = file_get_contents('php://input');

    $orderData = json_decode($get, true);

    $id = htmlspecialchars($orderData['id']);
    $status = htmlspecialchars($orderData['status']);

    $host = 'localhost';
    $user = 'root';
    $dbpass = 'root';
    $db = 'jsiseasy';

    $id = (int)$id;

    $connect = new mysqli($host, $user, $dbpass, $db);

    $query = "UPDATE orders SET status='$status' WHERE id=$id;";
   
    $connect->query($query);
    
    $connect->close();

?>