//map


//function initMap() {
     
    var locSudi = {lat: 30.240023, lng: 120.1392895};
    var locQuyuan = {lat: 30.246037, lng: 120.131593};
    var locPinghu = {lat: 30.259543, lng: 120.13006};

    var mapOptions = {
      sudi: {
        center: locSudi,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE
        mapTypeControl: false
      },
      quyuan: {
        center: locQuyuan,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false
      },
      pinghu: {
        center: locPinghu,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false
      },
      duanqiao: {
        center: {lat: 25.7823072, lng: -80.3011205},
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE
        mapTypeControl: false
      },
      liulang: {
        center: {lat: 25.7823072, lng: -80.3011205},
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE
        mapTypeControl: false
      },
      huagang: {
        center: {lat: 25.7823072, lng: -80.3011205},
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE
        mapTypeControl: false
      },
      leifeng: {
        center: {lat: 25.7823072, lng: -80.3011205},
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE
        mapTypeControl: false
      },
      santan: {
        center: {lat: 25.7823072, lng: -80.3011205},
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE
        mapTypeControl: false
      }, 
              
        };
    


var maps = {
        
  sudiMap:new google.maps.Map(document.getElementById("sudi"), mapOptions.sudi),
  quyuanMap:new google.maps.Map(document.getElementById("quyuan"), mapOptions.quyuan),
  pinghuMap:new google.maps.Map(document.getElementById("pinghu"), mapOptions.pinghu),
  duanqiaoMap:new google.maps.Map(document.getElementById("duanqiao"), mapOptions.duanqiao),
  liulangMap:new google.maps.Map(document.getElementById("liulang"), mapOptions.liulang),
  huagangMap:new google.maps.Map(document.getElementById("huagang"), mapOptions.huagang),
  leifengMap:new google.maps.Map(document.getElementById("leifeng"), mapOptions.leifeng),
  santanMap:new google.maps.Map(document.getElementById("santan"), mapOptions.santan) 
}
    
    
    
// var marker = new google.maps.Marker({
//        position: locSudi,
//        map: sudiMap,
//        title: 'Su Di Chun Xiao',
//      });
//    var marker = new google.maps.Marker({
//        position: locQuyuan,
//        map: quyuanMap,
//        title: 'Qu Yuan Feng He',
//      });
//    var marker = new google.maps.Marker({
//        position: locPinghu,
//        map: pinghuMap,
//        title: 'Ping Hu Qiu Yue',
//      }); 
    
    
  // };

/* An event listener to get the current google map frame and resize it */
$('#intro').bind('slid.bs.carousel', function (e) {
  /* Get the id of the current slide */
  var id = $('.active .carousel-caption div').attr('id');
  /* Get the map variable of the current id*/
  var map = maps[id+"Map"];
  /* Load and resize the google map*/
  google.maps.event.trigger(map, 'resize');
});












/*    google.maps.event.addDomListener(window, 'load', initMap);
    google.maps.event.addDomListener(window, "resize", function() {

        if($('.item.active')) {
             var center = map.getCenter();
             google.maps.event.trigger(map, "resize");
             map.setCenter(center); 
            }
    }); */





/*
google.maps.event.addDomListener(window, 'load', initialize);

google.maps.event.addDomListener(window, "resize", resizingMap());

$('#myMapModal').on('show.bs.modal', function() {
   //Must wait until the render of the modal appear, thats why we use the resizeMap and NOT resizingMap!! ;-)
   resizeMap();
})

function resizeMap() {
   if(typeof map =="undefined") return;
   setTimeout( function(){resizingMap();} , 400);
}

function resizingMap() {
   if(typeof map =="undefined") return;
   var center = map.getCenter();
   google.maps.event.trigger(map, "resize");
   map.setCenter(center); 
} */


/*$('#intro').on('slid.bs.carousel', function () {
    $('.item.active')
    google.maps.event.trigger(map, "resize");
  
 });*/



/*function resizeMap() {
   
}
*/


