<?php
	$con = mysqli_connect('localhost','root','') or die(mysql_error());
	$con->set_charset('utf8');
	mysqli_select_db($con,'rotaract') or die(mysql_error());
?>