<?php
header("Access-Control-Allow-Origin: *");
header("Cache-Control: *"); //HTTP 1.1
  error_reporting(0);
  include("config.php");    
  $data = file_get_contents("php://input");
  $data = json_decode($data);
  
  $name = $data->name;
  $group=$data->group;
  $amount=$data->amount;
  $type="out";
  $details=$data->details;


  mysqli_query($con,"INSERT INTO `accountdetails`(`name`, `classN`, `amount`, `type`, `details`) VALUES('$name','$group','$amount','$type','$details')") or die(mysqli_error($con));
  echo true;


?>