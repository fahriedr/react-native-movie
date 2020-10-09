/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import BottomNavigation from './components/BottomNavigation';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <BottomNavigation />
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  bar: {
    backgroundColor: 'red',
  },
});

export default App;
