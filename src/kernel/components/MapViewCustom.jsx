import React, {useState,useEffect} from 'react';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function MapViewCustom(props) {

  const {latitude, longitude, title, description} = props;
  const [location, setLocation] = useState(null);
  let subscription;

    const startTracking = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permiso de ubicación denegado');
        return;
      }

      subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 1000,
          distanceInterval: 1,
        },
        (loc) => {
          setLocation(loc.coords);
          console.log('Ubicacion: ',loc.coords);
        }
      );
    };
  useEffect(() => {
    startTracking();

    return () => {
      if (subscription) subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
    {
        location && (   
            <MapView style={styles.map}
                initialRegion={{
                    latitude: location.latitude || 18.85034430274575,
                    longitude: location.longitude || -99.2007355056972,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                zoomControlEnabled={true}
            >
            <Marker
                coordinate={{
                    latitude: location.latitude || 18.85034430274575,
                    longitude: location.longitude || -99.2007355056972,
                }}
                title={title}
                description={description}
            />
            </MapView>
        )
    }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: 320,
  },
});