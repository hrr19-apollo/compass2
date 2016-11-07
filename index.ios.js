import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Dimensions,
  Navigator
} from 'react-native';
import Login from './src/components/Login';
import Map from './src/components/Map';


class compass2 extends Component {

  renderScene(route, navigator) {
    const { name, passProps } = route;
    if (name === 'Login') {
      return <Login navigator={navigator} />
    } else if (name === 'Map') {
      return <Map navigator={navigator} />
    } else if (name === 'ChatList') {
    } else if (name === 'Chat') {
    } else if (name === 'UserProfile') {
    }
  }

  render() {
    return (
      <Navigator
      style={{ backgroundColor: 'white', }}
      initialRoute={{ name:'Login' }}
      renderScene={this.renderScene}
      navigationBar={
        <Navigator.NavigationBar
          routeMapper={{
            LeftButton: (route, navigator, index, navState) =>
              { return; },
            RightButton: (route, navigator, index, navState) =>
              { return; },
            Title: (route, navigator, index, navState) =>
              { return (<Text>Compass</Text>); },
           }}
           style={{backgroundColor: 'white', height: 50}}
         />
        }
      />

    )
  }
};



AppRegistry.registerComponent('compass2', () => compass2);






