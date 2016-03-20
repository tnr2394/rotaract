<?php
	include("config.php");
	$id = $_GET["id"];
	$result = mysqli_query($con,"select * from `eventphotos` where eventid = '$id'") or die(mysqli_error($con));
	$ara = array();
	while($x = mysqli_fetch_array($result)){
		$x['path'] = $_SESSION['serverUrl'].$x['path'];
		$ara[] = $x;
	}

	echo json_encode($ara);

