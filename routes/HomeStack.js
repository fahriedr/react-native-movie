import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import MovieDetailPage from '../pages/MovieDetailPage';
import BottomNavigation from '../components/BottomNavigation';
import NowPlayingPage from '../pages/NowPlayingPage';
import TopRatedPage from '../pages/TopRatedPage';
import PopularPage from '../pages/PopularPage';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailPage}
        options={{title: false, headerShown: false}}
      />
      <Stack.Screen
        name="NowPlaying"
        component={NowPlayingPage}
        options={{
          title: 'Now Playing',
          headerTitleStyle: {color: '#fff'},
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#0a0a19'},
        }}
      />
      <Stack.Screen
        name="TopRated"
        component={TopRatedPage}
        options={{
          title: 'Top Rated',
          headerTitleStyle: {color: '#fff'},
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#0a0a19'},
        }}
      />
      <Stack.Screen
        name="PopularPage"
        component={PopularPage}
        options={{
          title: 'Popular Movies',
          headerTitleStyle: {color: '#fff'},
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#0a0a19'},
        }}
      />
    </Stack.Navigator>
  );
}
