<?php
	include("config.php");

	$result = mysqli_query($con , " SELECT * FROM `currentpostholders` WHERE  `username` = '".$_GET['username']."' AND `password` = '".$_GET['password']."' AND `post` ='Admin' ") or die(mysqli_error($con));
	if(mysqli_num_rows($result)===1){
		$ara = array();
		while($x = mysqli_fetch_array($result)){
			$ara['name'] = $x['name'];
			$ara['username'] = $x['username'];
			$ara['password'] = $x['password'];
			$ara['post'] = $x['post'];
			$ara['id'] = $x['id'];
			$ara['status'] = true;
			break;
		}
	}
	else{
		$ara = array();
		$ara['status'] = false;
	}
echo json_encode($ara);