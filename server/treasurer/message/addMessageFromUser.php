<?php
header("Access-Control-Allow-Origin: *");
header("Cache-Control: *"); //HTTP 1.1
  //error_reporting(0);
  include("config.php");    
  $data = file_get_contents("php://input");
  $data = json_decode($data);
  $name = $data->name;
  $for = $data->for;
  $xid = $data->xid;
  $message = $data->message;

  mysqli_query($con,"INSERT INTO `membersmessage`(`name`, `for`, `xid`, `message`) VALUES('$name','$for','$xid','$message')") or die(mysqli_error($con));
  echo true;
?>
