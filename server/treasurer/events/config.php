<?php
	$con = mysqli_connect('localhost','root','') or die(mysql_error());
	$con->set_charset('utf8');
	mysqli_select_db($con,'rotaract') or die(mysql_error());
	$GLOBALS['con'] = $con;

	function get_new_event_id($con){

	    $events = mysqli_query($con,"SELECT * FROM `rotaract`.`events` order by `id` desc") or die(mysqli_error($con) );
	    if($events->num_rows == 0){
	    	return 1;
	    }
	    else{
		    while( $event =  mysqli_fetch_array($events))
		    {
		        return ($event['id'] + 1);
		    }
	    }
	}

?>