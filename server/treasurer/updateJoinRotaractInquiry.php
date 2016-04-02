<?php

	require 'config.php';
	
	header("Access-Control-Allow-Origin: *");
	header("Cache-Control: *"); //HTTP 1.1


	$id = $_GET['id'];
	
	mysqli_query($con,"UPDATE joinrotaract set status='attended' where id = '$id'") or die(false);

	echo true;