<?php
include("../conf.php");    
    session_start();

        mkdir('../events/'.$_POST["eventid"],0777);
        $upath="../events/".$_POST["eventid"]."/";
            
        foreach ($_FILES['uploads']['name'] as $key=>$file) {
            $file = $file;
            $target = $upath.$file;
            $path=substr($target,3);
            // echo $path;
            move_uploaded_file($_FILES['uploads']['tmp_name'][$key], $target)
            or die();
            mysql_query("Insert into `eventphotos`(eventid,path) VALUES('".$_POST["eventid"]."','".$path."')")or die(mysql_error());
            
        }
        
        
        ob_start();
        header("LOCATION:addnewevent.php");
        ob_end_clean();



?>
