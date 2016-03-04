<?php
	require 'config.php';

	$ara = array();

	$result = mysqli_query($con,"SELECT * FROM `testimonials` where id = '$_GET[id]'") or die(mysqli_error($con));
	while($x = mysqli_fetch_array($result)){
		$ara['id'] = $x['id'];
		$ara['author'] = $x['author'];
		$ara['post'] = $x['post'];
		$ara['message'] = $x['message'];

	}
	echo json_encode($ara);

