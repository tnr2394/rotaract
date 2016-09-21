<!DOCTYPE html>
<html>
    <head>
        <?php
            include("conf.php");
             $event=get_event_name($_GET["id"]);
                            
        
        ?>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="style/style.css" >
        <title></title>
    </head>
    <body>
        <table id="main_table" border="1" class="main">
            <tr class="main">
                <td colspan="2" class="main" id="header"><?php include("banner.php") ?></td>
            </tr>
            
            <tr class="main">
                 <td class="main" colspan="2" id="tmenu_holder" >
                    <?php
                    
                        include("tmenu.php")
                    ?>
                    
                </td>
            </tr>
            <tr class="main">
                <td class="main" id="smenu">
                    <?php 
                        include("smenu.php")
                    ?>
                </td>
                <td class="main">
                    <fieldset>
                        <legend><h1>
                           <?php
                            echo $event['name'];
                           ?></h1>
                        </legend>
                        <div>
                            <form method="POST" action="uploader.php" enctype="multipart/form-data" >
                                <input type="file" name="uploads[]" multiple>
                                <input type="hidden" name="eventid" value="<?php echo $_GET["id"]; ?>">
                                <button type="submit" class="form" >Upload Photos</button>
                            
                            </form>
                        </div>
                    </fieldset>
                </td>
            </tr>
        </table>

    </body>
</html>
