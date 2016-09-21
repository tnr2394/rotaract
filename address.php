<div class="fl_left center">
    
    
    <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false">
    </script>
    
    <div style="height: 200px; width: 300px; overflow: hidden; border-style: solid; ">
        <div id="gmap_canvas" style="height:200px;;width:300px;">
            
        </div>
        <style>
            #gmap_canvas img{max-width:none!important;background:none!important}
        </style>
    </div>
    <script type="text/javascript"> 
        function init_map(){var myOptions = {zoom:16,center:new google.maps.LatLng(22.293730474877133,70.74585709115445),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(22.293730474877133, 70.74585709115445)});google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);
    </script>
    
    <br />
          <a href="#"></a></div>
        <address>
        T.N.Rao College<br />
        B/h. MCA Department <br />
        Near Saurashtra University Campus<br />
        Rajkot<br />
        360005<br />
        <br />
        Tel: 0281-2970471/2970472 <br />
        Email: <a href="#">tnraocollege@ymail.com</a>
        </address>