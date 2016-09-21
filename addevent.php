<?php
    include("conf.php");
	
?>
<html>
<head>
<?php
	include("style.php");
?>
</head>
<body>
 <?php 
 		
        include("row1.php");
        include("topnav.php");
      	?>
        <div class="wrapper row3">
		  <div class="rnd">
		    <div id="container" class="clear">
      			<div id="homepage" class="clear">
                             <fieldset>
                              <form method="GET" ACTION="addeventquery.php">
                            <legend><h2><strong>Add Event</strong></h2></legend>
                        <table class="form" >
                            <tr>
                                <td width="28%" class="form">
                                    Event Name:
                                </td>
                                <td width="72%" class="form">
                                    <input type="text" name="name">
                                </td>
                            </tr>
                            <tr class="form">
                                    
                                <td class="form">
                                    Event Type:
                                </td>
                                <td class="form" style="text-align:left;"><select name="type"><option value="seminar">Seminar</option><option value="sports">Sports</option></select></td>
                            </tr>
                            
                            <tr class="form">
                                    
                                <td class="form">
                                    Event Description:
                                </td>
                                <td class="form" style="text-align:left;"><textarea rows="20" cols="80" name="description"></textarea></td>
                            </tr>
                            <tr>
                                <td height="59" class="form" >
                                    
                                </td>
                                <td class="form" >
                                    <button type="submit" class="form">Submit</button>
                                    </form>
                                    </td>
                                </td>
                                
                            </tr>
                        </table>
                        </fieldset>
                        </div>
                    </div>
	  	</div>
	</div>
        <?php
        include("row4.php");
        include("footer.php");
  ?>
</body>
</html>
