<?php
include("config.php");
header('Content-Type: application/json');

$data = file_get_contents("php://input");
$data = json_decode($data,true);
$data = $data['data'];
$name=$data['eventName'];
$description=$data['eventDescription'];
$date=$data['eventDate'];
$place=$data['eventPlace'];
if(isset($name)&&isset($place)&&isset($date)&&isset($description)){

	mysqli_query($con,"INSERT INTO `events`(`name`,`description`,`date`,`place`) VALUES('".$name."','".$description."','".$date."','".$place."')") or die(mysqli_error($con));
	$last_id = mysqli_insert_id($con);

	$ara = array();
	$ara['name'] = $name;
	$ara['description'] = $description;
	$ara['date'] = $date;
	$ara['place'] = $place;
	$ara['id']=$last_id;
	$_SESSION['eventid'] = $last_id;
	echo json_encode($ara);
}
else{
	echo "Event could not be created.";
}

?>
