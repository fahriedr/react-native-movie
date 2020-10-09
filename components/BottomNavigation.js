import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBook,
  faHome,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import HomePage from '../pages/HomePage';
import Favorites from '../pages/Favorites';
import Search from '../pages/Search';
import Account from '../pages/Account';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

export class BottomNavigation extends Component {
  render() {
    return (
      <Tab.Navigator tabBarOptions={{activeTintColor: '#0a0a19'}}>
        <Tab.Screen
          name="Home"
          component={HomePage}
          inactiveColor="#95a5a6"
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faHome} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faSearch} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faBook} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faUser} color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomNavigation;
