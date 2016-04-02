<?php
include("config.php");
error_reporting(-1);
ini_set('display_errors', 'On');
$data = file_get_contents("php://input");
$data = json_decode($data,true);
$name=$data['name'];
$description=$data['description'];
$date=$data['date'];
$place=$data['place'];
$id=$data['id'];

if(isset($name)&&isset($id)&&isset($place)&&isset($date)&&isset($description)){
	mysqli_query($con,"UPDATE `upcomingevents` SET `name`='$name', `description`='$description',`date` = '$date', `place`='$place' where `id`=$id") or die();
	// echo "Event updated.";
	// echo "UPDATE `upcomingevents` SET `name`='$name', `description`='$description',`date` = '$date', `place`='$place' where `id`=$id";
}
else{
	echo "Event could not be updated.";
}

?>
