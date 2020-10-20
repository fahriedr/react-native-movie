import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../pages/Search';
import MovieDetailPage from '../pages/MovieDetailPage';

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen name="MovieDetail" component={MovieDetailPage} />
    </Stack.Navigator>
  );
}
