<?php 
include("config.php");

$result = mysqli_query($con,"select * from contactquery where status = false") or die(mysqli_error($con));
$ara = array();
while($x = mysqli_fetch_assoc($result)){
	array_push($ara, $x);
}
echo json_encode($ara,true);