<?php
	include("config.php");
	error_reporting(1);
	$result = mysqli_query($con,"select * from `testimonials`") or die(mysql_error());
	$ara = array();
	while($x = mysqli_fetch_assoc($result)){
		array_push($ara, $x);
	}
	echo json_encode($ara);
/*	while($item = mysqli_fetch_assoc($result)){
		$ara[] = array(
				'message' => $item['message'],
				'author' => $item['author'],
				'post' => $item['post'],

			);
	}*/
header('Content-type: text/plain; charset=utf-8');
	// echo json_encode($ara);
?>