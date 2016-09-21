<?php
include("conf.php");
mysql_query("insert into `events`(name,description,type) VALUES('".$_GET['name']."','".$_GET['description']."','".$_GET['type']."')") or die(mysql_error());
$lastrec=mysql_query("select `id` from events where name='".$_GET['name']."' order by id desc");
$id=mysql_fetch_assoc($lastrec);
echo $id["id"];

header("LOCATION:addeventphotos.php?id=".$id['id']);

?>
