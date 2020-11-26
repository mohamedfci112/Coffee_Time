<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

include('config.php');
$sth = $db->prepare("SELECT count(*) FROM contacts",
  array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute();
$x = $sth->fetchAll();
  echo json_encode($x);
?>
