<?php
    include("conf.php");


?>
<html>
    <head>
        <!-- Homepage Specific Elements -->
<script type="text/javascript" src="scripts/jquery-1.4.1.min.js"></script>
<script type="text/javascript" src="scripts/jquery-ui-1.7.2.custom.min.js"></script>
<script type="text/javascript" src="scripts/jquery.tabs.setup.js"></script>
<!-- End Homepage Specific Elements -->
        <style>
            body{
                zoom:150%;
            }
            pre{
                font-family: tahoma;
            }
        </style>
        
        <script>
            $(document).ready(function(){

                $("#first").focus();
            });
        </script>
    </head>
<pre>
<form method="POST">
Name:           <input type="text" name="name" id="first">
Courseid:       <input type="text" name="courseid">
Qualification:  <input type="text" name="qualification">
Post:             <input type="text" name="post" list="hlist">
<datalist id="hlist">
  <option value="H.O.D.">
  <option value="Assistant Professor">
  <option value="Lab Assistant">

</datalist>
<input type="submit">

</form>

</pre>

<?php
if(isset($_POST["name"]))
{
   $name=$_POST["name"] ;
   $names=explode(" ",$name);
   $photo=$names[0].$names[1];
   $photo=  "images/teachers/".strtolower($photo).".jpg";
   $uid=strtolower($photo);
   $password='password';
   echo "<img src='".$photo."'>";
   mysql_query("INSERT INTO `teachers`(`name`, `courseid`, `qualification`, `post`, `photo`,`uid`,`password`) VALUES('".$_POST["name"]."','".$_POST["courseid"]."','".$_POST["qualification"]."','".$_POST['post']."','".$photo."','".$uid."','".$password."')");

  
   
   
}
?>