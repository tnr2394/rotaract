<?php
	require 'config.php';
	
	$result = mysqli_query($con,"select id,name,date,place from events order by date desc") or die(mysqli_error($con));
	$ara = array();
	while($x = mysqli_fetch_array($result)){
		$ara[]=$x;
	}
	echo json_encode($ara);