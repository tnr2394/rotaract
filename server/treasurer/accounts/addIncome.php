<?php

include("config.php");

header("Access-Control-Allow-Origin: *");
header("Cache-Control: *"); //HTTP 1.1
  //error_reporting(0);
  include("config.php");    
  $data = file_get_contents("php://input");
  $data = json_decode($data);
  $name = $data->name;
  $group=$data->group;
  $amount=$data->amount;
  $type="In";
  $details=$data->details;
  $date = date('Y-m-d H:i:s');
  

  mysqli_query($con,"INSERT INTO `accountdetails`(`name`, `classN`, `amount`, `type`, `details`) VALUES('$name','$group','$amount','$type','$details')") or die(mysqli_error($con));
  echo true;

  $myfile = fopen("accountdetailslog.txt", "a")or die("Unable to open file!");
  
  fwrite($myfile,"{\"name\":\"".$name."\",\"group\":\"".$group."\",\"amount\":\"".$amount."\",\"type\":\"".$type."\",\"details\":\"".$details."\",\"Time\":\"".$date."\"},");
  fwrite($myfile, "\n");

?>