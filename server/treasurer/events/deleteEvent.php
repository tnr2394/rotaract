<?php
	include("config.php");
	$id = $_GET['id'];
	mysqli_query($con,"delete from events where id = '$id'") or die(mysqli_error($con));
	mysqli_query($con,"delete from eventphoto where eventid = '$id'") or die(mysqli_error($con));
