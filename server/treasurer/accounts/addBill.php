<?php
header("Access-Control-Allow-Origin: *");
header("Cache-Control: *"); //HTTP 1.1
  include("config.php");    

  if(!file_exists('../../assets/'.$_GET['id'])){
    mkdir('../../assets/'.$_GET['id'],0777);
  }
  $upath="../../assets/".$_GET['id']."/";
  // print_r($_FILES['file']['name']);
  $target = $upath.$_FILES['file']['name'];
  $path=substr($target,6);

  echo $target ;
  echo $_FILES['file']['temp_name)'];
  if(move_uploaded_file($_FILES['file']['tmp_name'],$target)){
   echo $_FILES['file']['name']." Uploaded.";
   mysqli_query($con,"INSERT INTO `eventphotos`(eventid,path) VALUES('".$_GET['id']."','".$path."')")or die(mysqli_error($con));
  }
  else{
   echo "Failed to upload.";
  }

?>