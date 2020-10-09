/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import HomePage from './pages/HomePage';
import BottomNavigation from './components/BottomNavigation';

const App = () => {
  return (
    <View>
      {/* <HomePage /> */}
      {/* <Text style={{color: 'red'}}>Hello</Text> */}
      <BottomNavigation />
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    margin: 10,
    width: 70,
    alignSelf: 'center',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  text: {
    color: '#fff',
  },
});

export default App;
