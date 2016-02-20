<?php
header("Access-Control-Allow-Origin: *");
header("Cache-Control: *"); //HTTP 1.1

  include("config.php");    
  
  print_r($_FILES);




  $upath="../../assets/postHolders/";
  $name = $_FILES['file']['name'];
  $target = $upath.$name;
  $path=substr($target,6);
  if(move_uploaded_file($_FILES['file']['tmp_name'],$target)){
   
   echo $_FILES['file']['name']." Uploaded.";
   mysqli_query($con,"UPDATE `postholders` set photo='$name' where id = '$_GET[id]'") or die(mysqli_error($con));
  }
  else{
   echo "Failed to upload.";
  }

?>
