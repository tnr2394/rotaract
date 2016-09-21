<?php
	include("config.php");
	$id = $_GET['id'];
	$result = mysqli_query($con,"select * from upcomingevents order by date desc") or die(mysqli_error($con));
	$ara = array();
	while($x = mysqli_fetch_array($result)){
		$sara = array();
		$sara['id'] = $x['id'];
		$sara['name'] = $x['name'];
		$sara['description'] = $x['description'];
		$sara['date'] = $x['date'];
		$sara['place'] = $x['place'];
		array_push($ara,$sara);
	}

	echo json_encode($ara);
?>