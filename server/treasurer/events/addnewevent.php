<!DOCTYPE html>
<html>
    <head>
    <title>K.J.Kotecha School</title>
    </head>
    <body>    

        <?php include("../conf.php");
            include("innerImports.php"); 
         ?>

        <div class="container-fluid" >
    
            <div class="row">
                <div class="col-md-2 col-xs-0 text-center">
                    <img src="../images/kotechalogo.png" id="logo">
                </div>

                <div class="col-md-9 col-xs-12 col-sm-12">
                    <h2 class="page-header pg_title bg-primary">Add Event</h2>
                    <div class="jumbotron">                    
                        <form method="GET" class="form" ACTION="addEventNewQuery.php">
                            <div class="form-group">
                                <label>Event Name:</label> <input type="text" class="form-control" name="name">
                            </div>
                            <div class="form-group">

                                <label>Event Description:</label><textarea class="form-control" name="description"></textarea>
                            </div>
                            
                            
                            <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>

                        </form>
                </div>
            </div>
        </div>
        <?php
        //Footer Space.
        ?>
    </div>
    
    </body>
</html>
