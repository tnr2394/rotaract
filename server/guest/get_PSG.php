<?php

	include("config.php");
	$curterm = (date("Y")-1)."-".date("Y");
	$result = mysqli_query($con,"select * from postholders where post like 'Governor' OR post like 'Secretary' or post like 'President' AND term = '$curterm' order by post");
	$ara = array();
	while($x = mysqli_fetch_assoc($result)){
		$x['photo'] = $_SESSION['serverUrl']."assets/postHolders/".$x['photo'];
		array_push($ara, $x);
	}
	echo json_encode($ara);

?>