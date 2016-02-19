<?php

	require 'config.php';
	$data = file_get_contents("php://input");
	$data = json_decode($data);

	$content = $data->content;
	$id = $data->id;

	
	mysqli_query($con,"UPDATE dashboard set content = '$content' where id = '$id'") or die(false);

	echo true;