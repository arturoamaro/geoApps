var fn={
    ready: function(){
      document.addEventListener("deviceready",fn.ini,"false");  
        document.addEventListener("deviceready",geo.getPosition,"false");  
    },
    init: function() {
        //Posición del mapa
        //fn.drawMap(19.053095, -98.221850);
        geo.getPosition(lat, lng);
    },
    drawMap: function(lat, lng){
        var latlng = new google.maps.LatLng(lat, lng);
        var myOptions = {
            zoom: 14,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
        //Marcador
        var marker = new google.maps.Marker({
            position: latlng, 
            map: map, 
            title:"Mi posición"
        });
    }
}

//$(fn.init);
$(fn.ready);