<?php

function sumlog(){
	$myfile = fopen("accountdetailslog.txt", "r")or die("Unable to open file!");
	$filedata=fread($myfile,filesize("accountdetailslog.txt"));
	$filedata="[".substr_replace($filedata,"",-2)."]";
	//error_reporting(0);
	echo $filedata;
	$ara=array();
	$ara=json_decode($filedata, true);
	echo json_encode($ara);	

	foreach($ara as $key=>$val)
	{
		if($val["type"]=="In")
		{
			$totalin=$totalin+$val["amount"];
		}
		if($val["type"]=="Out")
		{
			$totalout=$totalout+$val["amount"];
		}
		$total=$totalin-$totalout;
	}
	$myfile = fopen("logsummary.txt", "w")or die("Unable to open file!");
  	fwrite($myfile,"{\"totalin\":\"".$totalin."\",\"totalout\":\"".$totalout."\",\"total\":\"".$total."\"}");
  	fclose($myfile);
  }

?>