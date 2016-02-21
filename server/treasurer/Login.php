<?php
	

	$con = mysqli_connect('localhost','root','') or die(mysql_error());

	//error_reporting(0);
	error_reporting(-1);
	ini_set('display_errors', 'On');

	// $con = mysqli_connect('localhost','root','') or die(mysql_error());
	$con->set_charset('utf8');
	mysqli_select_db($con,'rotaract') or die(mysql_error());

	

	$result = mysqli_query($con , " SELECT * FROM `currentpostholders` WHERE  `username` = '".$_GET['username']."' AND `password` = '".$_GET['password']."'") or die(mysqli_error($con));
		$ara = array();
	if(mysqli_num_rows($result)===1){
		while($x = mysqli_fetch_array($result)){
			$ara['name'] = $x['name'];
			$ara['username'] = $x['username'];
			$ara['password'] = $x['password'];
			$ara['post'] = $x['post'];
			$ara['id'] = $x['id'];
			$ara['status'] = true;
			// Set session variables
			$_SESSION["username"] = $x['username'];
			$_SESSION["password"] = $x['password'];
			$_SESSION["post"] = $x['post'];
			break;

		}
	}
	else{
		$ara = array();
		$ara['status'] = false;
	}

echo json_encode($ara);

?>