import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import MovieDetailPage from '../pages/MovieDetailPage';
import BottomNavigation from '../components/BottomNavigation';

const Stack = createStackNavigator();

export default function HomeStack({navigation}) {
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
        options={{title: 'false'}}
      />
    </Stack.Navigator>
  );
}
