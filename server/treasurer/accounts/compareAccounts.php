
<?php 
	include("config.php");
	
	$myfile = fopen("logsummary.txt", "r")or die("Unable to open file!");
	$filedata=fread($myfile,filesize("logsummary.txt"));
	$filedata="[".substr_replace($filedata,"",-2)."]";
	//error_reporting(0);
	$ara=array();
	$ara=json_decode($filedata, true);
	$final=json_encode($ara,true);	

	$result = mysqli_query($con,"select * from `accountsummary` ") or die(mysqli_error($con));
	
	while($x = mysqli_fetch_array($result)){
		$sara['totalin']=$x['totalin'];
		$sara['totalout']=$x['totalout'];
		$sara['total']=$x['total'];

		foreach($ara as $key=>$val)
		{
			if($val["totalin"]!=$sara['totalin'])
			{
				echo true;
			}
			if($val["totalout"]!=$sara['totalout'])
			{
				echo true;
			}
			if($val["total"]!=$sara['total'])
			{
				echo true;
			}

			echo false;
			
		}
		

	}
	
?>
