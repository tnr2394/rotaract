<?php
header("Access-Control-Allow-Origin: *");
header("Cache-Control: *"); //HTTP 1.1

include("config.php");    
    // mkdir('../../events/'.$_POST["eventid"],0777); 
    // mkdir('../../events/1',0777);
    // $upath="../events/".$_POST["eventid"]."/";
    print_r($_FILES);
    $upath="../../events/1/";
    // print_r($_FILES['uploads']['name']);
    foreach ($_FILES['uploads']['name'] as $key=>$file) {
        $file = $file;
        $target = $upath.$file;
        $path=substr($target,3);
        echo $_FILES;
        if( move_uploaded_file($_FILES['uploads']['tmp_name'][$key], $target)){
            echo "success";
        }
        else {
            echo "fail";
        }
                // mysqli_query($con,"INSERT INTO `eventphotos`(eventid,path) VALUES('".$_POST["eventid"]."','".$path."')")or die(mysql_error());
        mysqli_query($con,"INSERT INTO `eventphotos`(eventid,path) VALUES('1','".$path."')")or die(mysqli_error());
        
    }
    
    
    ob_start();
    // header("LOCATION:addnewevent.php");
    ob_end_clean();



?>
