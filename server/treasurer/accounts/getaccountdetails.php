<?php 
	include("config.php");
	
	$result = mysqli_query($con,"select * from `accountdetails` ") or die(mysqli_error($con));
	$ara = array();
	while($x = mysqli_fetch_array($result)){
		$sara['id']=$x['id'];
		$sara['name']=$x['name'];
		$sara['classN']=$x['classN'];
		$sara['amount']=$x['amount'];
		$sara['type']=$x['type'];
		$sara['details']=$x['details'];
		$sara['datetime']=$x['datetime'];
		array_push($ara,$sara);
	}
	echo json_encode($ara,true);
?>