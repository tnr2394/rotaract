<?php
	include("config.php");
	$id = $_GET['id'];
	mysqli_query($con,"delete from upcomingevents where id = '$id'") or die(mysqli_error($con));
