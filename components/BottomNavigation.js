import React, {Component} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from '../pages/HomePage';

const Tab = createMaterialBottomTabNavigator();

export class BottomNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomePage} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default BottomNavigation;
