<?php
	$id = $_GET['id'];
	include("config.php");
	$result = mysqli_query($con,"SELECT * FROM `events` WHERE `id` = '$id'") or die(mysqli_error());
	$ara = array();
	
	while($x = mysqli_fetch_array($result)){
		$ara['id'] = $x['id'];
		$ara['name'] = $x['name'];
		$ara['description'] = $x['description'];
		$ara['date'] = $x['date'];
		$ara['place'] = $x['place'];

	};
	echo json_encode($ara);