<?php

	include("config.php");
	$result = mysqli_query($con,"select * from postholders");
	$ara = array();
	while($x = mysqli_fetch_assoc($result)){
		$x['photo'] = $_SESSION['serverUrl']."assets/postHolders/".$x['photo'];
		array_push($ara, $x);
	}
	echo json_encode($ara);

?>