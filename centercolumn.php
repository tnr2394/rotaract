 <div id="latestnews">
          <h2>Latest News &amp; Events</h2>
          <marquee  behavior="scroll" direction="down" scrolldelay="250"  style="height: 550px;"onmouseover="this.stop();" onmouseout="this.start();" scrollamount="10" > 
          <ul>
              <?php
                include("conf.php");
                $feeds=  mysql_query("select * from feeds");
                while($feed=  mysql_fetch_assoc($feeds))
                {
                    ?>
            
              
              <li class="clear">
                  <div>
                      <h2><?php echo $feed["name"]; ?></h2>
                      <p><?php 
                        echo $feed["description"];
                      ?></p>
              </div>
            </li>

                    
                    
              <?php
                }
              ?>
          </ul>
          </marquee>
        </div>