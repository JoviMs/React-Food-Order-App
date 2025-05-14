<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Validate user (pseudo-code - replace with DB check)
    $user = User::authenticate($username, $password);
    
    if ($user) {
        $_SESSION['user'] = $user;
        header("Location: /");
    } else {
        $error = "Invalid credentials";
    }
}

// Load login view
require __DIR__ . '/../views/login.php';
?>