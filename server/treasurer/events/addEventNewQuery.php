<?php
include("config.php");
header('Content-Type: application/json');
session_start();
$data = file_get_contents("php://input");
$data = json_decode($data);
$data = $data->data;

$name=$data->eventName;
$description=$data->eventDescription;
$date=$data->eventDate;
$place=$data->eventPlace;
$id=get_new_event_id($con);

if(isset($name)&&isset($id)&&isset($place)&&isset($date)&&isset($description)){
	mysqli_query($con,"INSERT INTO `events`(id,name,description,date,place) VALUES('".$id."','".$name."','".$description."','".$date."','".$place."')") or die(mysqli_error($con));
	$ara = array();
	$ara['name'] = $name;
	$ara['description'] = $description;
	$ara['date'] = $date;
	$ara['place'] = $place;
	$ara['id'] = $id;
	$_SESSION['eventid'] = $id;
	echo json_encode($ara);
}
else{
	echo "Event could not be created.";
}

?>
