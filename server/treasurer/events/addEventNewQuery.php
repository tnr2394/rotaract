<?php
include("../conf.php");

session_start();
$name=$_GET['name'];
$description=$_GET['description'];
$id=get_new_event_id();
$_SESSION["ID"]=$id;

mysql_query("insert into `events_NewName`(id,name,description) VALUES('".$id."','".$name."','".$description."')") or die(mysql_error());
echo true;
// ob_start();
// header("LOCATION:addeventphotos.php?id=".$id);
// ob_end_clean();
?>
