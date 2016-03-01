<?php

	include("config.php");
	$result = mysqli_query($con,"select * from postholders where post like 'Governor' OR post like 'Secretary' or post like 'President' order by post");
	$ara = array();
	while($x = mysqli_fetch_assoc($result)){
		$x['photo'] = "http://www.mylionsgroup.com/Angular/rotaract/server/assets/postHolders/".$x['photo'];
		array_push($ara, $x);
	}
	echo json_encode($ara);

?>