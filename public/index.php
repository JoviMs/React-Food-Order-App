<?php
require __DIR__ . '/../app/routes.php';

session_start();

// Route requests
$request = $_SERVER['REQUEST_URI'];
$react_path = '/react-build'; // Where your React app lives

// Auth routes
switch ($request) {
    case '/login':
        require __DIR__ . '/../app/controllers/login.php';
        break;
    case '/register':
        require __DIR__ . '/../app/controllers/register.php';
        break;
    case '/logout':
        require __DIR__ . '/../app/controllers/logout.php';
        break;
    default:
        // Serve React app if logged in
        if (isset($_SESSION['user'])) {
            require __DIR__ . "$react_path/index.html";
        } else {
            header("Location: /login");
        }
}
?>