<?php
include("config.php");
header('Content-Type: application/json');
session_start();
$data = file_get_contents("php://input");
$data = json_decode($data);
$data = $data->data;

$name=$data->name;
$description=$data->description;
$date=$data->date;
$place=$data->place;

if(isset($name)&&isset($place)&&isset($date)&&isset($description)){
	mysqli_query($con,"INSERT INTO `upcomingevents`(name,description,date,place) VALUES('".$name."','".$description."','".$date."','".$place."')") or die(mysqli_error($con));
	echo true;
}
else{
	echo "Event could not be created.";
	echo "<br>";
	print_r($data);
}

?>
