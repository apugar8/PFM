require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/tasks/support/Query"
  ], function(Map, MapView, FeatureLayer, Query) {

    var template = { // autocasts as new PopupTemplate()
      title: "Estación {Localidad}",
      content: "Temperatura mínima: {Temp_min}<br>Temperatura máxima: {Temp_max}<br>Viento: {Viento}<br>Precipitación: {Precipitacion}"
    };

    var layer = new FeatureLayer({
      url: "https://services5.arcgis.com/zZdalPw2d0tQx8G1/arcgis/rest/services/Estaciones_Meteorol%C3%B3gicas_WFL1/FeatureServer",
      popupTemplate: template
    });

    var map = new Map({
      basemap: "streets",
      layers: [layer]
    });

    var view = new MapView({
      container: "viewDiv",
      map: map,
      zoom: 4,
      center: [15, 65] // longitud, latitud
    });

    var query = new Query();
    query.returnGeometry = false;
    query.outFields = ["Localidad", "Temp_min", "Temp_max", "Viento", "Precipitacion"];
    query.where = "1=1";

    layer.queryFeatures(query).then(function(results){
      var features = results.features;
      var listDiv = document.getElementById("listDiv");

      for (var i = 0; i < features.length; i++) {
        var div = document.createElement("div");
        div.className = "Estación";
        div.innerHTML = "<h2>" + features[i].attributes.nombre + "</h2>" +
                        "<p>Temp_min: " + features[i].attributes.Temp_min + "</p>" +
                        "<p>Temp_max: " + features[i].attributes.Temp_max + "</p>" +
                        "<p>Viento: " + features[i].attributes.Viento + "</p>" +
                        "<p>Precipitación: " + features[i].attributes.Precipitacion + "</p>";
        listDiv.appendChild(div);
      }
    });
});