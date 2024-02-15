
require(["esri/Map", "esri/views/MapView", "esri/Graphic", "esri/PopupTemplate"], function(Map, MapView, Graphic, PopupTemplate) {
    var map = new Map({
      basemap: "topo-vector" 
    });
  
    var view = new MapView({
      container: "map",
      map: map,
      zoom: 8,
      center: [window.estaciones[0].longitud, window.estaciones[0].latitud] // Centra el mapa en la primera estación
    });
  
    // Añadir un marcador para cada estación
    for (let estacion of window.estaciones) {
      var point = {
        type: "point",
        longitude: estacion.longitud,
        latitude: estacion.latitud
      };
  
      var simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40], 
        outline: {
          color: [255, 255, 255], 
          width: 1  
        }
      };
  
      var popupTemplate = new PopupTemplate({
        title: estacion.nombre,
        content: "Temperatura: " + estacion.temperatura.toFixed(2) + "°C<br>" +
                 "Precipitación: " + estacion.precipitacion.toFixed(2) + "mm"
      });
  
      var pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol,
        popupTemplate: popupTemplate
      });
  
      view.graphics.add(pointGraphic);
    }
  });