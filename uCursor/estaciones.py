import arcpy
import random
from datetime import datetime
import time


def actualizar_datos_meteorologicos():
    
    feature_layer = "https://services5.arcgis.com/zZdalPw2d0tQx8G1/arcgis/rest/services/Estaciones_Meteorol%C3%B3gicas_WFL1/FeatureServer"

    temp_min_range = (4, 12)
    temp_max_range = (15, 30)
    viento_range = (0, 60)
    precipitacion_range = (0, 50)

    with arcpy.da.UpdateCursor(feature_layer, ["temperaturaMin", "temperaturaMax", "viento", "precipitacion"]) as cursor:
        for row in cursor:
            
            row[5] = random.uniform(*temp_min_range)
            row[6] = random.uniform(*temp_max_range)
            row[7] = random.uniform(*viento_range)
            row[8] = random.uniform(*precipitacion_range)

            cursor.updateRow(row)

while True:
    actualizar_datos_meteorologicos()
    print(f"Datos actualizados a las {datetime.now()}")
    time.sleep(24 * 60 * 60) 