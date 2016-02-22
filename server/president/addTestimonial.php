<?php

	require 'config.php';
	$data = file_get_contents("php://input");
	$data = json_decode($data);
	$author = $data->author;
	$message = $data->message;
	$post = $data->post;
	
	mysqli_query($con,"INSERT INTO testimonials(author,post,message) VALUES('$author','$post','$message')") or die(false);

	echo true;