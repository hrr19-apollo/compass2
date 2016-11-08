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
import BottomNavBar from './src/components/BottomNavBar';
import ChatList from './src/components/ChatList';
import UserProfile from './src/components/UserProfile';
import colors from './src/styles/colors';
import buildStyleInterpolator from 'buildStyleInterpolator'



class compass2 extends Component {

  renderScene(route, navigator) {
    const { name, passProps } = route;
    if (name === 'Login') {
      return <Login navigator={navigator} />
    } else if (name === 'Map') {
      return (
        <View>
          <Map navigator={navigator} />
          <BottomNavBar viewLabel={'Map'} navigator={navigator} />
        </View>
        )
    } else if (name === 'ChatList') {
      return (
        <View>
          <ChatList navigator={navigator} />
          <BottomNavBar viewLabel={'Chat'} navigator={navigator} />
        </View>
      )
    } else if (name === 'Chat') {
    } else if (name === 'UserProfile') {
      return (
        <View>
          <UserProfile navigator={navigator} />
          <BottomNavBar viewLabel={'User'} navigator={navigator} />
        </View>
      )
    }
  }

  configureScene(route, routeStack){

    let noTransition = {
      opacity: {
        value: 1.0,
        type: 'constant'
      }
    };

   return  {
    ...Navigator.SceneConfigs.PushFromRight,
    gestures: null,
    defaultTransitionVelocity: 1000,
    animationInterpolators: {
      into: buildStyleInterpolator(noTransition),
      out: buildStyleInterpolator(noTransition)
    }
  }
}

  // Change initialRoute to start on a different page if you're working on a different component
  render() {
    console.log("bsi",buildStyleInterpolator)
    return (
      <Navigator
      configureScene={this.configureScene}
      style={{ backgroundColor: 'white', }}
      initialRoute={{ name:'ChatList' }}
      renderScene={this.renderScene}
      navigationBar={
        <Navigator.NavigationBar
          routeMapper={{
            LeftButton: (route, navigator, index, navState) =>
              { return; },
            RightButton: (route, navigator, index, navState) =>
              { return; },
            Title: (route, navigator, index, navState) =>
              { return (<Text style={styles.navBarText}>Compass</Text>); },
           }}
           style={styles.navBar}
         />
        }
      />

    )
  }
};

const styles = {
  navBar: {
    backgroundColor: 'white',
    height: 50,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    borderBottomWidth: 0.5,
    borderBottomColor: colors.extraLightGrey,
  },
  navBarText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 3,

  },

}

AppRegistry.registerComponent('compass2', () => compass2);






