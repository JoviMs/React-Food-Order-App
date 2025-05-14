<!DOCTYPE html>
<html>
<body>
    <h2>Login</h2>
    <?php if (isset($error)): ?>
        <p style="color:red"><?= $error ?></p>
    <?php endif; ?>
    <form method="POST">
        <input type="text" name="username" required>
        <input type="password" name="password" required>
        <button type="submit">Login</button>
    </form>
    <a href="/register">Register</a>
</body>
</html>