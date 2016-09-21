<?php
	include("config.php");
	$result = mysqli_query($con,"SELECT * FROM events WHERE DATEDIFF(CURDATE(),date) <= 90 ORDER BY `date` DESC") or die(mysqli_error($con));
	$ara = array();
	while($x = mysqli_fetch_array($result)){
		$sara = array();
		$sara['id'] = $x['id'];
		$sara['name'] = $x['name'];
		$sara['description'] = $x['description'];
		$sara['date'] = $x['date'];
		$sara['place'] = $x['place'];
		$sara['images'] = getImages($x['id'],$con);
		array_push($ara,$sara);
	}
	function getImages($id,$con){
		$result = mysqli_query($con,"select * from eventphotos where eventid = '$id'") or die(mysqli_error($con));
		$nara = array();
		while($y = mysqli_fetch_array($result)){
			$y['path'] = $_SESSION['serverUrl'].$y['path'];
			$nara[] = $y;
		}
		return $nara;
	}

	echo json_encode($ara);
?>