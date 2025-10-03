<?php

    header('Access-Allow-Control-Headers: Content-Type');
    header('Content-Type: application/json');

    $get = file_get_contents('php://input');
    $data = json_decode($get, true);

    // if (!$data['id'] == 0) {
    //     http_response_code(200);
    // } else {
    //     http_response_code(400);
    //     exit();
    // }

    $id = htmlspecialchars($data['id']);

    $host = 'localhost';
    $user = 'root';
    $pass = 'root';
    $db = 'jsiseasy';

    $link = new mysqli($host, $user, $pass, $db);

    $query = "DELETE FROM users WHERE id=$id;";

    $link->query($query);

    echo 'User ',$id,' has been deleted successsfully!';

    $link->close();

?>