import { useEffect, useState, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize } from "../../GlobalStyles";
import MapMarker from "../../assets/svg/marker";

import { GOOGLE_MAPS_APIKEY } from "@env";

export const Map = () => {
  const origin = { latitude: 37.78825, longitude: -122.4324 };
  const destination = { latitude: 37.3352, longitude: -122.0096 };

  const [mapRegion, setMapRegion] = useState(null);

  useEffect(() => {
    const calculateMapRegion = () => {
      const coordinates = [origin, destination];
      const latitudes = coordinates.map((coordinate) => coordinate.latitude);
      const longitudes = coordinates.map((coordinate) => coordinate.longitude);

      const minLat = Math.min(...latitudes);
      const maxLat = Math.max(...latitudes);
      const minLng = Math.min(...longitudes);
      const maxLng = Math.max(...longitudes);

      const latDelta = maxLat - minLat;
      const lngDelta = maxLng - minLng;

      const padding = 0.4;

      setMapRegion({
        latitude: (minLat + maxLat) / 2,
        longitude: (minLng + maxLng) / 2,
        latitudeDelta: latDelta + padding,
        longitudeDelta: lngDelta + padding,
      });
    };

    calculateMapRegion();
  }, []);

  const mapStyle = [
    {
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ visibility: "simplified" }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: Color.bgGrey,
        },
      ],
    },
    {
      featureType: "water",
      stylers: [
        {
          color: "#b5c7da",
        },
      ],
    },
  ];

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={mapRegion}
      customMapStyle={mapStyle}
      scrollEnabled={false}
      zoomEnabled={false}
      rotateEnabled={false}
    >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="#665CD1"
      />
      <Marker coordinate={origin} aria-disabled={true}>
        <View style={styles.wrap}>
          <View style={styles.callout}>
            <Text style={styles.calloutTitle}>Антоновича 176</Text>
            <Text style={styles.calloutText}>Україна, м.Київ</Text>
          </View>
          <View style={styles.marker}>
            <MapMarker />
          </View>
        </View>
      </Marker>
      <Marker coordinate={destination} aria-disabled={true}>
        <View style={styles.wrap}>
          <View style={styles.callout}>
            <Text style={styles.calloutTitle}>Антоновича 176</Text>
            <Text style={styles.calloutText}>Україна, м.Київ</Text>
          </View>
          <View style={styles.marker}>
            <MapMarker />
          </View>
        </View>
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  marker: {
    width: 18,
    height: 18,
  },
  wrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  callout: {
    backgroundColor: Color.mainLight,
    borderRadius: 4,
    padding: 4,
    marginBottom: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  calloutTitle: {
    fontFamily: FontFamily.medium,
    fontSize: FontSize.H4_size,
    color: Color.blackLight,
  },
  calloutText: {
    fontFamily: FontFamily.light,
    fontSize: FontSize.size_2xs,
    color: Color.separatorColor,
  },
});
