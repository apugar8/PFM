import time
import random
import schedule
from arcgis.gis import GIS
from arcgis.features import FeatureLayer

gis = GIS("https://esmastergis.maps.arcgis.com/home/index.html", "apuigcerver.mg", "Sequier.8")

sub_feature_layer = FeatureLayer("https://services5.arcgis.com/zZdalPw2d0tQx8G1/arcgis/rest/services/Estaciones_Meteorol%C3%B3gicas_WFL1/FeatureServer/0", gis)

def update_features():
    print("Iniciando actualización...")  

    features = sub_feature_layer.query()

    for feature in features:
        
        feature.attributes['Temp_min'] = random.randint(4, 12)
        feature.attributes['Temp_max'] = random.randint(15, 30)
        feature.attributes['Precipitacion'] = random.randint(0, 60)
        feature.attributes['Viento'] = random.randint(0, 50)

        sub_feature_layer.edit_features(updates=[feature])

    print("Actualización completada") 

# Ejecuta la función una vez inmediatamente
update_features()

# Programar la actualización para las 00:00 todos los días
schedule.every().day.at("00:00").do(update_features)

while True:
    # Ejecuta las tareas programadas
    schedule.run_pending()

    # Duerme durante 1 minuto para evitar la ejecución continua del bucle
    time.sleep(60)




