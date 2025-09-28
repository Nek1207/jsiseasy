<?php

    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

    $get = file_get_contents('php://input');

    $data = json_decode($get, true);
    


    $host = 'localhost';
    $user = 'root';
    $dbpass = 'root';
    $db = 'jsiseasy';

    $connect = new mysqli($host, $user, $dbpass, $db);

    $query = "SELECT * FROM users";

    $result = $connect->query($query);

    $usersData = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $usersData[] = $row;
    }

    echo json_encode($usersData);

    $connect->close();

?>