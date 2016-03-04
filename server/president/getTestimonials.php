<?php
	require 'config.php';

	$ara = array();

	$result = mysqli_query($con,"SELECT * FROM `testimonials`") or die(mysqli_error($con));
	while($x = mysqli_fetch_array($result)){
		array_push($ara,$x);
	}
	// print_r($ara);	
	echo json_encode($ara);

