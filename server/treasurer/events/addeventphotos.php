<!DOCTYPE html><?php
    include("innerImports.php");
?>
<html>
    <head>
    <title>K.J.Kotecha School</title>
    </head>
    <body>    

        <?php
            include("../conf.php");
            session_start();
            $id=$_GET["id"];
        ?>

        <div class="container-fluid" >
    
            <div class="row" id="type1">
                <div class="col-md-2">
                    <img src="../images/kotechalogo.png" id="logo">
                </div>
                <div class="col-md-10 col-xs-12">
                    <h2 class="page-header pg_title bg-primary">
                           <?php
                           $event=get_event_name($id);
                            echo $event["name"];
                           ?>
                            <?php
                                echo $event["id"];
                            ?>
                    </h2>
                            <form method="POST" action="uploader.php" enctype="multipart/form-data" >
                                <div class="form-group">
                                    <input type="file" class="form-control" name="uploads[]" multiple>
                                    <input type="hidden" name="eventid" value="<?php echo $id; ?>">
                                    <button type="submit" class="btn btn-warning" >Upload Photos</button>
                                </div>                            
                            </form>
                </div>
            </div>

        </div>
    </body>
</html>
