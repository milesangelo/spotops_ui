import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MapView, {Marker, PROVIDER_DEFAULT} from 'react-native-maps';
import {Colors, Fonts, Sizes} from '../theme';

// Placing a mock marker directly in the center of the map.
function testMarker() {
  return (
    <Marker coordinate={{latitude: 39.965281, longitude: -75.780216}}>
      <View
        style={{
          height: 20,
          width: 20,
          backgroundColor: Colors.darkPurple,
          borderRadius: Sizes.radius,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* put the specific type icon inside the marker! */}
      </View>
    </Marker>
  );
}

// Actual Map
function renderMap() {
  return (
    <View style={{...StyleSheet.absoluteFillObject, flex: 1}}>
      <MapView
        provider={PROVIDER_DEFAULT} // remove if not using Google Maps
        style={{flex: 1}}
        region={{
          latitude: 39.965281,
          longitude: -75.780216,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {testMarker()}
      </MapView>
    </View>
  );
}

// Header
function renderHeader() {
  return (
    <View
      style={{
        position: 'absolute',
        top: 45,
        left: 0,
        right: 0,
        height: 50,
        alignItems: 'center',
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: Sizes.width * 0.9,
          paddingVertical: Sizes.padding,
          paddingHorizontal: Sizes.padding * 2,
          backgroundColor: Colors.white,
          borderRadius: Sizes.radius,
        }}></View>
    </View>
  );
}


// Zoom in and out
function zoomIn() {}

function zoomOut() {}

function renderButtons() {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: Sizes.height * 0.35,
        right: Sizes.padding * 1.1,
        width: 60,
        height: 60,
        justifyContent: 'space-between',
      }}>
      {/* zoom in */}
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: Colors.white,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => zoomIn()}>
        <Text style={{...Fonts.body1}}>+</Text>
      </TouchableOpacity>

      {/* zoom out */}
      <TouchableOpacity
        style={{
          width: Sizes.zoomButton,
          height: Sizes.zoomButton,
          backgroundColor: Colors.white,
          marginTop: 10,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => zoomOut()}>
        <Text style={{...Fonts.body1}}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

// Details about the spot.
function renderSpotInfo() {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        alignItems: 'center',
        flex: 1,
      }}>
      <View
        style={{
          width: Sizes.width * 0.9,
          paddingVertical: Sizes.padding * 3,
          paddingHorizontal: Sizes.padding * 2,
          borderRadius: Sizes.radius,
          backgroundColor: Colors.white,
        }}></View>
    </View>
  );
}


// MapScreen
export default () => {
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
      }}>
      {renderMap()}
      {renderHeader()}
      {renderSpotInfo()}
      {renderButtons()}
    </View>
  );
};
