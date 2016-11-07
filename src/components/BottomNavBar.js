import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image, 
  Dimensions, 
  TouchableHighlight,
} from 'react-native';

import colors from '../styles/colors';

const BottomNavBar = ({ navigator, currentView }) => {

  // destructuring the styles for easier readability inside of returned JSX
  const { 
    bottomBar,
    navButton,
    text,
  } = styles;

  const menu = ['Map', 'Chat', 'User'];

  const renderText = function() {
    return menu.map(option => {

      let style = text;
      if (option === currentView) {
        style = {...text, ...{color: colors.lightBlue}};
      }
      return (
        <TouchableHighlight 
          onPress={() => navigator.push({name: 'Map'})} 
          underlayColor={colors.extraLightGrey} 
          key={option}
        >
          <Text style={style}>{option}</Text>
        </TouchableHighlight>
      )
    })
  }

  return (
    <View style={bottomBar}>
      { renderText() }
    </View>
  )
};

// stylin'!
const styles = {
  bottomBar: {
    backgroundColor: 'white',

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    width: Dimensions.get('window').width,
    height: 50,

    position: 'absolute',
    top: Dimensions.get('window').height - 50,
    right: 0,
    zIndex: 1,

    borderTopWidth: 0.5,
    borderTopColor: colors.extraLightGrey,
  },
  navButton: {

  },
  text: {
    color: colors.lightGrey,

  },
}


export default BottomNavBar;