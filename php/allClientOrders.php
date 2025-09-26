<?php

    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

    $get = file_get_contents('php://input');

    $data = json_decode($get, true);


    // ПРОБЛЕМА ЗДЕСЬ

    
    // if (!isset($data['login'])) {
    //     echo json_encode(['success' => false, 'message' => 'Недостаточно данных.']);
    //     http_response_code(400);
    //     exit();
    // } else {
    //     http_response_code(200);
    // }

    $login = htmlspecialchars($data['login']);


    $host = 'localhost';
    $user = 'root';
    $dbpass = 'root';
    $db = 'jsiseasy';

    $connect = new mysqli($host, $user, $dbpass, $db);

    $query = "SELECT * FROM orders WHERE login = '$login';";


    $result = $connect->query($query);

    $orderData = array();


    while ($row = mysqli_fetch_assoc($result)) {
        $orderData[] = $row;
    }

    echo json_encode($orderData);

?>