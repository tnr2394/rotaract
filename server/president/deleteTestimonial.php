<?php

	require 'config.php';
	
	$id=$_GET['id'];

	mysqli_query($con,"DELETE from testimonials where id = $id") or die(false);

	echo true;
