var geo = {
  getPosition: function(){
      navigator.geolocation.getCurrentPosition(geo.success, geo.error);
  },
    success: function(pos){
        fn.drawMap(pos.coords.latitude, pos.coords.longitude);
    },
    error: function(err){
        alert(err.code);
    }
};