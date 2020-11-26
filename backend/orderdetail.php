<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

include('config.php');
$ordername = $_POST['ordername'];
$sth = $db->prepare("SELECT * FROM $ordername",
   array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
 $sth->execute();
 $x = $sth->fetchAll();

  echo json_encode($x);
?>
