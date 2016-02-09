<?php
	$con = mysqli_connect('localhost','root','') or die(mysql_error());
	$con->set_charset('utf8');
	mysqli_select_db($con,'rotaract') or die(mysql_error());

	session_start();
	$filename=substr($_SERVER['PHP_SELF'],-9);
	echo "$filename";
	function checkSession()
	{
		if($filename!="Login.php")
		{
			
			
			if($_SESSION["username"]==null && $_SESSION["username"]=="" && $_SESSION["password"]==null && $_SESSION["password"]=="")
			{
			header('HTTP/1.1 401 Unauthorized', true, 401);
			}
		}
		
	}

	checkSession();

	function get_new_event_id(){
    $events=mysqli_query($con,"select * from events_NewName order by id desc");

    while($event=  mysqli_fetch_assoc($events))
    {
        return ($event['id']+1);
    }
}

?>