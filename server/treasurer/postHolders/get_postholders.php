<?php

	include("config.php");
	$result = mysqli_query($con,"select * from postHolders");
	$ara = array();
	while($x = mysqli_fetch_assoc($result)){
		$x['photo'] = "http://localhost/Angular/rotaract/server/assets/postholders/".$x['photo'];
		array_push($ara, $x);
	}
	echo json_encode($ara);

?>