<?php
	include("config.php");

	echo "data:-";

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
echo "data:-";
echo json_encode($ara);

?>