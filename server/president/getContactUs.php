<?php
	require 'config.php';

	$ara = array();

	$result = mysqli_query($con,"SELECT * FROM `dashboard` where name = 'contactUs'") or die(mysqli_error($con));
	
	while($x = mysqli_fetch_array($result)){
		echo json_encode($x);
		break;
	}

