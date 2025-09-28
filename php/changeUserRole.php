<?php

    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

    $get = file_get_contents('php://input');

    $userData = json_decode($get, true);

    $id = htmlspecialchars($userData['id']);
    $role = htmlspecialchars($userData['role']);

    $host = 'localhost';
    $user = 'root';
    $dbpass = 'root';
    $db = 'jsiseasy';

    $id = (int)$id;

    $connect = new mysqli($host, $user, $dbpass, $db);

    $query = "UPDATE users SET role='$role' WHERE id=$id;";
   
    $connect->query($query);
    
    $connect->close();

?>