<?php
	require 'config.php';
	error_reporting(-1);
	$result = mysqli_query($con,"select * from `testimonials`") or die(mysql_error());
	$ara = array();
	while($x = mysqli_fetch_assoc($result))	
	{
		array_push($ara, $x);
	}	
		
	echo json_encode($ara);
	
	header('Content-type: text/plain; charset=utf-8');
?>