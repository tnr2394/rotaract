<?php
	

<<<<<<< HEAD
	$con = mysqli_connect('localhost','root','') or die(mysql_error());
=======
	$con = mysqli_connect('localhost','root','password') or die(mysql_error());
>>>>>>> 1dec9bf53dece97e4651132bda87903bfa708998

	// error_reporting(0);
	// error_reporting(-1);
	// ini_set('display_errors', 'On');

	// $con = mysqli_connect('localhost','root','') or die(mysql_error());
	$con->set_charset('utf8');
	mysqli_select_db($con,'rotaract') or die(mysql_error());

	session_start();
	$filename=substr($_SERVER['PHP_SELF'],-9);

	function checkSession()
	{
		if($filename!="Login.php")
		{
/*
			if($_SESSION["username"]==null && $_SESSION["username"]=="" && $_SESSION["password"]==null && $_SESSION["password"]=="")
			{	
				echo "ERROR IN SESSION";
				header('HTTP/1.1 401 Unauthorized', true, 401);
			}*/
		}
		
	}

	checkSession();

?>	
