/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import BottomNavigation from './components/BottomNavigation';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(48, 1, 112)',
  },
};

const App = () => {
  return (
    // <View>
    <NavigationContainer theme={MyTheme}>
      <BottomNavigation />
    </NavigationContainer>
    // </View>
  );
};

const style = StyleSheet.create({});

export default App;

// primary: '#0a0a19',
//       background: '#0a0a19',
//       card: '#0a0a19',
//       text: '#0a0a19',
//       border: '#0a0a19',
//       notification: '#0a0a19',
