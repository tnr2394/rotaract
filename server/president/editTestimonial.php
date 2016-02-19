<?php

	require 'config.php';
	$data = file_get_contents("php://input");
	$data = json_decode($data);
	$author = $data->author;
	$message = $data->message;
	$post = $data->post;
	$id = $data->id;

	
	mysqli_query($con,"UPDATE testimonials set author = '$author', message = '$message', post = '$post' where id = '$id'") or die(false);

	echo true;