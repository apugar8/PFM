
// Estaciones meteorológicas
window.estaciones = [
    { nombre: 'Estación Agricultor 1 (Silla)', latitud: 39.35193, longitud: -0.41592, temperatura: 23, precipitacion: 0 },
    { nombre: 'Estación Agricultor 2 (Picasent)', latitud: 39.33992, longitud: -0.54216, temperatura: 20, precipitacion: 0 },
    { nombre: 'Estación Agricultor 3 (Monserrat)', latitud: 39.36657, longitud: -0.61305, temperatura: 21, precipitacion: 0 },
    { nombre: 'Estación Agricultor 4 (Godelleta)', latitud: 39.42098, longitud: -0.67374, temperatura: 20, precipitacion: 0 },
    { nombre: 'Estación Agricultor 5 (Torrent)', latitud: 39.43186, longitud: -0.49167, temperatura: 22, precipitacion: 0 },
    { nombre: 'Estación Agricultor 6 (Manises)', latitud: 39.49221, longitud: -0.50235, temperatura: 19, precipitacion: 0 },
    { nombre: 'Estación Agricultor 7 (Quart de Poblet)', latitud: 39.47384, longitud: -0.45137, temperatura: 23, precipitacion: 0 },
    { nombre: 'Estación Agricultor 8 (Massanassa)', latitud: 39.40673, longitud: -0.37660, temperatura: 22, precipitacion: 0 },
  
  ];
  
  // Generar datos meteorológicos aleatorios
  function generarDatosMeteorologicos() {
    for (let estacion of window.estaciones) {
      estacion.temperatura = Math.random() * (25 - 10) + 10; 
      estacion.precipitacion = Math.random() * 50; 
    }
  }
  
  // Actualizar los datos meteorológicos diariamente
  setInterval(generarDatosMeteorologicos, 24 * 60 * 60 * 1000); 
  
  generarDatosMeteorologicos();