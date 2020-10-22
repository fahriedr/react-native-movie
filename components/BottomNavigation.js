import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faSearch,
  faUser,
  faHeart,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';
import HomePage from '../pages/HomePage';
import Favorites from '../pages/Favorites';
import Search from '../pages/Search';
import ProfilePage from '../pages/ProfilePage';
import HomeStack from '../routes/HomeStack';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

export default function BottomNavigation({navigation}) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'grey',
        style: {backgroundColor: '#100e2a', height: 50, borderTopColor: 'grey'},
        showLabel: false,
      }}
      tabBarLabel={() => {
        return null;
      }}>
      <Tab.Screen
        initialParams={{navigation: navigation}}
        name="Home"
        component={HomePage}
        inactiveColor="#95a5a6"
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faHome} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faSearch} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faBookmark} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfilePage}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faUser} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
