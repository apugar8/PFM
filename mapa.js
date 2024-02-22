

require(["esri/Map", "esri/views/MapView", "esri/Graphic", "esri/PopupTemplate", "esri/layers/FeatureLayer", "esri/widgets/BasemapToggle", "esri/widgets/ScaleBar", "esri/widgets/Compass", "esri/widgets/AreaMeasurement2D"], function(Map, MapView, Graphic, PopupTemplate, FeatureLayer, BasemapToggle, ScaleBar, Compass, AreaMeasurement2D) {
    
  var map = new Map({
    basemap: "topo-vector" 
  })

  var view = new MapView({
    container: "map",
    map: map,
    zoom: 12,
    center: [-0.45988, 39.36011]
  })

  const limite = new FeatureLayer({
    url: "https://services5.arcgis.com/zZdalPw2d0tQx8G1/arcgis/rest/services/LimitesAreadeEstudi_Dissolve/FeatureServer",
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: [0, 0, 0, 0],
        outline: {
          color: "#c70101",
          width: 1.5
        }
      }
    }
  })

  map.add(limite)

 
  // Añadir un marcador para cada estación
  for (let estacion of window.estaciones) {
    var point = {
      type: "point",
      longitude: estacion.longitud,
      latitude: estacion.latitud
    }

    var simpleMarkerSymbol = {
      type: "simple-marker",
      color: "#1bc6f2",
      outline: {
        color: "#181818", 
        width: 0.5  
      }
    }

    var popupTemplate = new PopupTemplate({
      title: estacion.nombre,
      content: "Temperatura min.: " + estacion.temperaturaMin.toFixed(2) + "°C<br>" +
               "Temperatura max.: " + estacion.temperaturaMax.toFixed(2) + "°C<br>" +
               "Precipitación: " + estacion.precipitacion.toFixed(2) + "mm<br>" +
                "Viento: " + estacion.viento.toFixed(2) + "km/h"
    })

    var pointGraphic = new Graphic({
      geometry: point,
      symbol: simpleMarkerSymbol,
      popupTemplate: popupTemplate
    })

    view.graphics.add(pointGraphic)
  }


  // Añadir un widget para cambiar el mapa base

  var basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "satellite"
  })

  view.ui.add(basemapToggle, {
    position: "top-right",
  })
  

  // Añadir una barra de escala

  var escala = new ScaleBar({
    view: view,
    unit: "metric",
    style: "ruler",
    color: "black",
  })

  view.ui.add(escala, {
    position: "bottom-left"
  })


  // Añadir un widget para orientar el mapa

  var norte = new Compass({
    view: view
  })

  view.ui.add(norte, {
    position: "top-left"
  })


  // Añadir un widget para medir áreas

  var medir2D = new AreaMeasurement2D({
    view: view
  })

  view.ui.add(medir2D, {
    position: "bottom-right"
  })
})