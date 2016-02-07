<?php
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
	$id = $data->id;
	mysqli_query($con,"UPDATE `postholders` set name='$name', enroll='$enroll', phone='$phone', gender='$gender',term='$term',message='$message',dept='$dept',post='$post' where id = '$id'") or die(mysqli_error($con));

	echo $id;