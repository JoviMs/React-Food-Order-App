<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = new User([
        'username' => $_POST['username'],
        'email' => $_POST['email'],
        'password' => password_hash($_POST['password'], PASSWORD_BCRYPT)
    ]);
    
    if ($user->save()) {
        header("Location: /login");
    }
}

require __DIR__ . '/../views/register.php';
?>