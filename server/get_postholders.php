<?php

	include("config.php");
	$result = mysql_query("select * from postHolders");
	$ara = array();
	while($x = mysql_fetch_assoc($result)){
		array_push($ara, $x);
	}
	echo json_encode($ara);

?>