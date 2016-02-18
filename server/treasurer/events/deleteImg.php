<?php include("config.php");
	
	$id = $_GET['id'];
	mysqli_query($con,"delete from eventphotos where id = '$id'") or die(mysqli_error($con));
	echo true;
	?>