<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

include('config.php');
$sth = $db->prepare("SELECT count(table_name) FROM information_schema.tables WHERE
 table_schema='coffee' AND table_name LIKE '%order%'",
  array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute();
$x = $sth->fetchAll();

  echo json_encode($x);
?>
