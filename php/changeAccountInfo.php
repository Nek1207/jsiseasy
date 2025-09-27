<?php

    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

    $get = file_get_contents('php://input');

    $data = json_decode($get, true);

    // print_r($data);

    // if (!isset($data['login'])) {
    //     http_response_code(400);
    //     exit();
    // } else {
    //     http_response_code(200);
    // }

    $id = htmlspecialchars($data['id']);
    $id = (int)$id;
    $login = htmlspecialchars($data['login']);
    $email = htmlspecialchars($data['email']);
    $phone = htmlspecialchars($data['phone']);
    $pass = htmlspecialchars($data['pass']);
    $role = htmlspecialchars($data['role']);
    $role = (int)$role;
    $description = htmlspecialchars($data['description']);
    $medals = htmlspecialchars($data['medals']);
    $medals = (int)$medals;
    $coursesCompleted = htmlspecialchars($data['coursesCompleted']);
    $coursesCompleted = (int)$coursesCompleted;
    $tasksSolved = htmlspecialchars($data['tasksSolved']);
    $tasksSolved = (int)$tasksSolved;
    $lessonsWatched = htmlspecialchars($data['lessonsWatched']);
    $lessonsWatched = (int)$lessonsWatched;
    $solutionsProposed = htmlspecialchars($data['solutionsProposed']);
    $solutionsProposed = (int)$solutionsProposed;
    $daysOfStudying = htmlspecialchars($data['daysOfStudying']);
    $daysOfStudying = (int)$daysOfStudying;
    $level = htmlspecialchars($data['level']);
    $level = (int)$level;
    $exp = htmlspecialchars($data['exp']);
    $exp = (int)$exp;
    $oldLogin = htmlspecialchars($data['oldLogin']);

    $host = 'localhost';
    $user = 'root';
    $dbpass = 'root';
    $db = 'jsiseasy';

    $connect = new mysqli($host, $user, $dbpass, $db);

    $query = "UPDATE users SET id=$id, login='$login', email='$email', phone='$phone', pass='$pass', role=$role, description='$description', medals=$medals, coursesCompleted=$coursesCompleted, tasksSolved=$tasksSolved, lessonsWatched=$lessonsWatched, solutionsProposed=$solutionsProposed, daysOfStudying=$daysOfStudying, level=$level, exp=$exp WHERE login = '$oldLogin';";

    $connect->query($query);

    $connect->close();

?>