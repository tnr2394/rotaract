<?php
include("config.php");
$data = file_get_contents("php://input");
$data = json_decode($data,true);

$name=$data['name'];
$description=$data['description'];
$date=$data['date'];
$place=$data['place'];
$id=$data['id'];
print_r($data);

if(isset($name)&&isset($id)&&isset($place)&&isset($date)&&isset($description)){

	mysqli_query($con,"UPDATE `events` SET `name`='$name', `description`='$description',`date` = '$date', `place`='$place' where `id`=$id") or die(mysqli_error($con));
	echo "Event Updated.";
/*	$ara = array();
	$ara['name'] = $name;
	$ara['description'] = $description;
	$ara['date'] = $date;
	$ara['place'] = $place;
	$ara['id'] = $id;
	echo json_encode($ara);*/
}
else{
	echo "Event could not be updated.";
}

?>
