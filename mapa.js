

require(["esri/Map", "esri/views/MapView", "esri/Graphic", "esri/PopupTemplate", "esri/widgets/BasemapGallery", "esri/widgets/ScaleBar", "esri/widgets/Compass", "esri/widgets/AreaMeasurement2D"], function(Map, MapView, Graphic, PopupTemplate, BasemapGallery, ScaleBar, Compass, AreaMeasurement2D) {
    
  var map = new Map({
    basemap: "topo-vector" 
  });

  var view = new MapView({
    container: "map",
    map: map,
    zoom: 11,
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

  // Añadir un widget para cambiar el mapa base

  var basemapGallery = new BasemapGallery({
    view: view
  });

  view.ui.add(basemapGallery, {
    position: "top-right"
  });


  // Añadir una barra de escala

  var escala = new ScaleBar({
    view: view,
    unit: "metric",
    style: "ruler",
    color: "black",
  });

  view.ui.add(escala, {
    position: "bottom-left"
  });


  // Añadir un widget para orientar el mapa

  var norte = new Compass({
    view: view
  });

  view.ui.add(norte, {
    position: "top-left"
  });


  // Añadir un widget para medir áreas

  var medir2D = new AreaMeasurement2D({
    view: view
  });

  view.ui.add(medir2D, {
    position: "bottom-right"
  });
});