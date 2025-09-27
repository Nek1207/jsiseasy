<?php

    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

    $get = file_get_contents('php://input');

    $data = json_decode($get, true);

    if (!isset($data['login']) || !isset($data['name'])) {
        echo json_encode(['success' => false, 'message' => 'Недостаточно данных.']);
        http_response_code(400);
        exit();
    } else {
        http_response_code(200);
    }


    // $name = htmlspecialchars($data['name']);
    $name = $data['name'];
    $login = htmlspecialchars($data['login']);
    $email = htmlspecialchars($data['email']);
    $phone = htmlspecialchars($data['phone']);
    $date = htmlspecialchars($data['date']);
    $cost = htmlspecialchars($data['cost']);
    $status = htmlspecialchars($data['status']);

    $host = 'localhost';
    $user = 'root';
    $dbpass = 'root';
    $db = 'jsiseasy';

    $connect = new mysqli($host, $user, $dbpass, $db);

    $query = "INSERT INTO orders (name, login, email, phone, date, cost, status) VALUES ('$name', '$login', '$email', '$phone', '$date', $cost, '$status');";

    $connect->query($query);

    $connect->close();

?>