<?php
	include("config.php");

	$from = $_GET['from'];
	$result = mysqli_query($con,"select * from ".$from) or die(mysqli_error($con));
	$ara = array();
	while($x = mysqli_fetch_array($result)){
		$nara = array();
		$nara['id'] = $x['id'];
		$nara['name'] = $x['name'];
		array_push($ara,$nara);
	}
	echo json_encode($ara);