<?php
	include("config.php");
	header("Access-Control-Allow-Origin: *");
header("Cache-Control: *"); //HTTP 1.1

	getImages($_GET['id'],$con);
	function getImages($id,$con){
		$result = mysqli_query($con,"select * from eventphotos where eventid = '$id' order by id desc") or die(mysqli_error($con));
		$nara = array();
		while($y = mysqli_fetch_array($result)){
			$y['path'] = "http://localhost/Angular/rotaract/server/".$y['path'];
			echo $y['path'];
			break;
		}
	}

?>