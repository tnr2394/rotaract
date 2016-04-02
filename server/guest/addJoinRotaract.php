<?php

	require 'config.php';
	
	header("Access-Control-Allow-Origin: *");
	header("Cache-Control: *"); //HTTP 1.1

	$data = file_get_contents("php://input");
	$data = json_decode($data);

	$name = $data->name;
	$phone = $data->phone;
	$email = $data->email;
	$enroll = $data->enroll;
	$dept = $data->dept;


	mysqli_query($con,"INSERT INTO joinrotaract(name,email,phone,enroll,dept) VALUES('$name','$email','$phone','$enroll','$dept')") or die(false);

	echo true;