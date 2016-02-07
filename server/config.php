<?php
	$con = mysqli_connect('localhost','root','') or die(mysql_error());
	$con->set_charset('utf8');
	mysqli_select_db($con,'rotaract') or die(mysql_error());

	function get_new_event_id(){
    $events=mysqli_query($con,"select * from events_NewName order by id desc");

    while($event=  mysqli_fetch_assoc($events))
    {
        return ($event['id']+1);
    }
}

?>