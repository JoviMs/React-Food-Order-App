<?php
class User {
    public static function authenticate($username, $password) {
        // Replace with real DB query
        $fake_db_user = [
            'id' => 1,
            'username' => 'demo',
            'password' => password_hash('demo123', PASSWORD_BCRYPT)
        ];
        
        if ($username === $fake_db_user['username'] && 
            password_verify($password, $fake_db_user['password'])) {
            return $fake_db_user;
        }
        return false;
    }
}
?>