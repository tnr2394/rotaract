<?php

	require 'config.php';
	$data = file_get_contents("php://input");
	$data = json_decode($data);

	$message = $data->message;
	$name = $data->name;
	$phone = $data->phone;
	$email = $data->email;


	mysqli_query($con,"INSERT INTO contactquery(name,email,phone,message) VALUES('$name','$email','$phone','$message')") or die(false);

	echo true;