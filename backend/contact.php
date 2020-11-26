<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

include('config.php');
echo 'Hello World';
$name=$_POST['name'];
$email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];

$q = "INSERT INTO contacts (name, email, subject, message) VALUES ('$name','$email','$subject','$message')";
  $db->exec($q);
?>
