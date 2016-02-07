<?php
header("Access-Control-Allow-Origin: *");
header("Cache-Control: *"); //HTTP 1.1
  error_reporting(0);
  include("config.php");    
  $data = file_get_contents("php://input");
  $data = json_decode($data);
  $name = $data->name;
  $enroll = $data->enroll;
  $phone = $data->phone;
  $gender = $data->gender;
  $term = $data->term;
  $message = $data->message;
  $dept = $data->dept;
  $post = $data->post;

  mysqli_query($con,"INSERT INTO `postholders`(`name`, `dept`, `enroll`, `phone`, `post`, `term`, `gender`, `photo`, `message`) VALUES('$name','$dept','$enroll','$phone','$post','$term','$gender','$photo','$message')") or die(mysqli_error($con));
  echo mysqli_insert_id($con);
?>
