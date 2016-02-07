<?php 
	include("config.php");
	$for = $_GET['for'];
	$id = $_GET['id'];
	$result = mysqli_query($con,"select * from `membersmessage` where `for` ='$for' AND xid='$id' ") or die(mysqli_error($con));
	$ara = array();
	while($x = mysqli_fetch_array($result)){
		$sara['id']=$x['id'];
		$sara['name']=$x['name'];
		$sara['message']=$x['message'];
		$sara['xid']=$x['xid'];
		array_push($ara,$sara);
	}
	echo json_encode($ara,true);