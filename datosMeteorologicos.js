
// Estaciones meteorológicas
window.estaciones = [
    { nombre: 'Estación Agricultor Silla 1 (Tierras arables de regadío)', latitud: 39.364680, longitud: -0.382237, temperatura: 23, precipitacion: 0 },
    { nombre: 'Estación Agricultor Picassent 1 (Cítricos)', latitud: 39.384916, longitud: -0.524373, temperatura: 20, precipitacion: 0 },
    { nombre: 'Estación Agricultor Picassent 2 (Cítricos de secano)', latitud: 39.371680, longitud: -0.492573, temperatura: 21, precipitacion: 0 },
    { nombre: 'Estación Agricultor Picassent 3 (Cítricos - frutales de regadío)', latitud: 39.357520, longitud: -0.529380, temperatura: 20, precipitacion: 0 },
    { nombre: 'Estación Agricultor Picassent 4 (Frutales de regadío)', latitud: 39.390969, longitud: -0.469098, temperatura: 22, precipitacion: 0 },
    { nombre: 'Estación Agricultor Silla 2 (Frutales de secano)', latitud: 39.374517, longitud: -0.424552, temperatura: 19, precipitacion: 0 },
    { nombre: 'Estación Agricultor Alcàsser 1 (Frutos secos de regadío)', latitud: 39.379135, longitud: -0.442002, temperatura: 23, precipitacion: 0 },
    { nombre: 'Estación Agricultor Picassent 5 (Frutos secos de secano)', latitud: 39.374990, longitud: -0.499353, temperatura: 22, precipitacion: 0 },
    { nombre: 'Estación Agricultor Silla 3 (Huerta)', latitud: 39.374434, longitud: -0.400884, temperatura: 23, precipitacion: 0 },
    { nombre: 'Estación Agricultor Picassent 6 (Invernadero)', latitud: 39.347385, longitud: -0.478143, temperatura: 20, precipitacion: 0 },
    { nombre: 'Estación Agricultor Picassent 7 (Olivar de secano)', latitud: 39.385636, longitud: -0.529850, temperatura: 21, precipitacion: 0 },
    { nombre: 'Estación Agricultor Silla 4 (Tierras arables de regadío)', latitud: 39.348854, longitud: -0.396542, temperatura: 20, precipitacion: 0 },
    { nombre: 'Estación Agricultor Silla 5 (Tierras arables de secano)', latitud: 39.378994, longitud: -0.396001, temperatura: 22, precipitacion: 0 },
    { nombre: 'Estación Agricultor Picassent 8 (Cítricos)', latitud: 39.391474, longitud: -0.516160, temperatura: 23, precipitacion: 0 },
    { nombre: 'Estación Agricultor Picassent 9 (Cítricos)', latitud: 39.350336, longitud: -0.453332, temperatura: 22, precipitacion: 0 },
    { nombre: 'Estación Agricultor Silla 6 (Tierras arables de regadío)', latitud: 39.329359, longitud: -0.403206, temperatura: 22, precipitacion: 0 },
    { nombre: 'Estación Agricultor Picassent 10 (Cítricos)', latitud: 39.323915, longitud: -0.482085, temperatura: 23, precipitacion: 0 },
    { nombre: 'Estación Agricultor Picassent 11 (Frutales)', latitud: 39.310369, longitud: -0.465090, temperatura: 22, precipitacion: 0 },
    { nombre: 'Estación Agricultor Silla 12 (Cítricos)', latitud: 39.319134, longitud: -0.506289, temperatura: 22, precipitacion: 0 },
    { nombre: 'Estación Agricultor Picassent 13 (Cítricos - frutales de regadío)', latitud: 39.302997, longitud: -0.432646, temperatura: 22, precipitacion: 0 },
    { nombre: 'Estación Agricultor Picassent 14 (Cítricos)', latitud: 39.349805, longitud: -0.495389, temperatura: 22, precipitacion: 0 },
    { nombre: 'Estación Agricultor Picassent 15 (Tieras arables de regadío)', latitud: 39.325708, longitud: -0.433805, temperatura: 19, precipitacion: 0 },
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