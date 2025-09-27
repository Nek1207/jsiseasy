<?php


    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

    $get = file_get_contents('php://input');

    $data = json_decode($get, true);

    // ПРОБЛЕМА ЗДЕСЬ


    // if (!isset($data['login'])) {
    //     http_response_code(400);
    //     exit();
    // } else {
    //     http_response_code(200);
    // }

    if (!isset($data['login']) || !isset($data['pass'])) {
        echo json_encode(['success' => false, 'message' => 'Недостаточно данных.']);
        http_response_code(400);
        exit();
    } else {
        http_response_code(200);
    }

    $login = htmlspecialchars($data['login']);
    $pass = htmlspecialchars($data['pass']);
    

    $host = 'localhost';
    $user = 'root';
    $dbpass = 'root';
    $db = 'jsiseasy';

    $connect = new mysqli($host, $user, $dbpass, $db);

    $query = "SELECT * FROM users WHERE login = '$login' AND pass = '$pass';";

    $result = $connect->query($query);

    $userData = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $userData[] = $row;
    }    

    // echo $login,"<br><br><br><br><br>",$pass;
    echo json_encode($userData);

    // echo json_encode($data),"<br><br><br>",$_SESSION['isSignIn'];

    $connect->close();

?>