import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image, 
  Dimensions, 
  StatusBar, 
  TouchableHighlight,
  MapView,
} from 'react-native';

import { fullPageView } from '../styles/globalStyles';
import BottomNavBar from './BottomNavBar';

const Map = ({ navigator }) => {

  // destructuring the styles for easier readability in returned JSX
  const { 
    map,
  } = styles;

  return (
    <View style={fullPageView}>
      <MapView 
        style={map} 
        mapType={'hybrid'}
        showUserLocation={true} 
        followUserLocation={true} 
      />
    </View>
  )
};

// stylin'!
const styles = {
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
}


export default Map;