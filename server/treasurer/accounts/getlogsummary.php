<?php

	include("config.php");
	$myfile = fopen("logsummary.txt", "r")or die("Unable to open file!");
	$filedata=fread($myfile,filesize("logsummary.txt"));
	$filedata="[".substr_replace($filedata,"",-2)."]";
	//error_reporting(0);
	echo $filedata;
	$ara=array();
	$ara=json_decode($filedata, true);
	echo json_encode($ara,true);	

?>