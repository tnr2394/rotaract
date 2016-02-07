<?php

	include("config.php");
	$id = $_GET['id'];
	$result = mysqli_query($con,"select * from postHolders where id = '$id'");
	$ara = array();
	while($x = mysqli_fetch_assoc($result)){
		$x['photo'] = "http://localhost/Angular/rotaract/server/assets/postHolders/".$x['photo'];
		array_push($ara, $x);
	}
	echo json_encode($ara);

?>