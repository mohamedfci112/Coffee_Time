<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

include('config.php');

$coffee = $_POST['coffee'];
$quantity = $_POST['quantity'];
$lat = $_POST['lat'];
$lng = $_POST['lng'];
$phone = $_POST['phone'];
$r= random_int(1, 999999);
$t="CREATE TABLE `order$r` ( `id` INT(11) NOT NULL AUTO_INCREMENT ,
`name` TEXT NOT NULL ,
`quantity` INT(11) NOT NULL ,
`lat` TEXT NOT NULL ,
`lng` TEXT NOT NULL ,
`phone` TEXT NOT NULL ,
`date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`)) ENGINE = InnoDB;";
$db->exec($t);
for($i =0;$i<count($coffee);$i++){
  $cof=$coffee[$i];
  $qua=$quantity[$i];
  $q = "INSERT INTO order$r (name, quantity, lat, lng, phone) VALUES ('$cof', '$qua', '$lat', '$lng', '$phone')";
  $db->exec($q);
}

?>
