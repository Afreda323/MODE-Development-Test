<?php
// I coded what I assumed would be required to complet the backend
// section of this test but dont know my way around servers and databases yet

$servername = "localhost";
$username = "username"; //insert db username
$password = "password"; //insert db password
$dbname = "dbname"; //insert db
$email=$_POST["email"];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO emails (email)
VALUES ('$email')";
//handle success and error
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
