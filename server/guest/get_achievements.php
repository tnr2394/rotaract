<?php
	require 'config.php';
	$result = mysqli_query($con,"select * from events where achievement=1 order by date desc") or die(mysqli_error($con));
	$ara = array();
	while($x = mysqli_fetch_array($result)){
		$sara = array();
		$sara['id'] = $x['id'];
		$sara['name'] = $x['name'];
		$sara['path'] = getImages($x['id'],$con);
		array_push($ara,$sara);
	}

	function getImages($id,$con){
		$result = mysqli_query($con,"select * from eventphotos where eventid = '$id' order by id desc") or die(mysqli_error($con));
		$nara = array();
		while($y = mysqli_fetch_array($result)){
			$x = $_SESSION['serverUrl'].$y['path'];
			return $x;
		}
	}

	echo json_encode($ara);
?>