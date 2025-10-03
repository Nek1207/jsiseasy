<?php

    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

    $get = file_get_contents('php://input');

    $data = json_decode($get, true);

    $id = htmlspecialchars($data['id']);

    $host = 'localhost';
    $user = 'root';
    $pass = 'root';
    $db = 'jsiseasy';

    $connect = new mysqli($host, $user, $pass, $db);

    $query = "DELETE FROM orders WHERE id=$id;";

    $connect->query($query);

    echo 'Order ',$id,' has been deleted successsfully!';

    $connect->close();



?>