<?php

	require 'config.php';
	$id = $_GET['id'];
	$result = mysqli_query($con,"select * from postholders where id = '$id'") or die(mysqli_error($con));

	$ara = array();

	while($x = mysqli_fetch_assoc($result)){
		$x['photo'] = $_SESSION['serverUrl']."assets/postHolders/".$x['photo'];
		array_push($ara, $x);
	}

	echo json_encode($ara);

?>