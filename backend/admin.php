<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

include('config.php');
$username = $_POST['username'];
$password = $_POST['password'];

  $sth = $db->prepare("SELECT username, password
    FROM admin
    WHERE username = '$username' and password = '$password'", array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute();
$x = $sth->fetch();
  echo json_encode($x);

?>
