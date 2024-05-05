<?php
// Database connection parameters
$host = 'localhost';
$username = 'my_web';
$password = 'admin0142';
$database = 'my_database';

// Connect to MySQL database
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve username and password from the login form
$username = $_POST['username'];
$password = $_POST['password'];

// SQL query to retrieve user from database
$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

// Check if the user exists
if ($result->num_rows > 0) {
    // User authenticated
    echo "Login successful!";
} else {
    // User not found
    echo "Invalid username or password!";
}

// Close database connection
$conn->close();
?>
