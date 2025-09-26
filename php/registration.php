<?php

    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

    $get = file_get_contents('php://input');

    $data = json_decode($get, true);

    if (!isset($data['login'])) {
        http_response_code(400);
        exit();
    } else {
        http_response_code(200);
    }

    $login = htmlspecialchars($data['login']);
    $email = htmlspecialchars($data['email']);
    $phone = htmlspecialchars($data['phone']);
    $pass = htmlspecialchars($data['pass']);

    $host = 'localhost';
    $user = 'root';
    $dbpass = 'root';
    $db = 'jsiseasy';

    $connect = new mysqli($host, $user, $dbpass, $db);

    $query = "INSERT INTO users (login, email, phone, pass, role, description, medals, coursesCompleted, tasksSolved, lessonsWatched, solutionsProposed, daysOfStudying) VALUES ('$login', '$email', '$phone', '$pass', 0, 'отсутствует', 0, 0, 0, 0, 0, 0);";

    $connect->query($query);


?>