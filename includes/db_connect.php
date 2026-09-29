<?php
$host     = 'localhost';
$dbname   = 'portfolio_db'; // Aapka database name
$username = 'root';         // Laragon default username
$password = '';             // Laragon default password (blank)

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    // English Error Response
    die(json_encode([
        'status'  => 'error',
        'message' => 'Database connection failed. Please try again later.'
    ]));
}
?>