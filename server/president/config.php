<?php
	include('../config.php');
	session_start();
	function checkSession()
	{
		if($_SERVER['PHP_SELF']!="/Angular/rotaract/server/president/presidentLogin.php")
		{
			if($_SESSION["username"]==null && $_SESSION["username"]=="" && $_SESSION["password"]==null && $_SESSION["password"]=="")
			{
			header('HTTP/1.1 401 Unauthorized', true, 401);
			}
		}
		
	}

	checkSession();


?>