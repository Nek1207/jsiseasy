<?php

    session_start();
    
    header('Content-Type: application/json');

    $error = [ 'error' => 'error' ];

    if ($_SESSION['isSignIn'] == 1) {
        $data = [
            'id' => $_SESSION['id'],
            'login' => $_SESSION['login'],
            'email' => $_SESSION['email'],
            'phone' => $_SESSION['phone'],
            'pass' => $_SESSION['pass'],
            'role' => $_SESSION['role'],
            'description' => $_SESSION['description'],
            'medals' => $_SESSION['medals']
        ];
        
        echo json_encode($data);

    } else {
        echo json_encode($error);
    }

?>