<?php
// Database Credentials (InfinityFree ya Live Server ki Details)
$host     = 'sqlxxx.infinityfree.com'; // InfinityFree ka MySQL Hostname
$db_name  = 'if0_xxxxxxxx_your_dbname'; // Complete Database Name
$username = 'if0_xxxxxxxx';            // Live Database Username
$password = 'YourvPanelPassword';      // InfinityFree vPanel Password

try {
    // PDO Connection String
    $pdo = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8mb4", $username, $password);
    
    // Error handling configuration
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

} catch (PDOException $e) {
    // Connection fail hone par error message
    die("Database Connection Failed: " . $e->getMessage());
}
?>