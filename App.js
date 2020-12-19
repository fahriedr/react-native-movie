/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import HomeStack from './routes/HomeStack';
import MovieSchema from './model/realmMovieModel';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#100e2a',
    accent: '#173B57',
  },
};

// const App = () => {
//   return (
//     <NavigationContainer theme={theme}>
//       <HomeStack />
//     </NavigationContainer>
//   );
// };

class App extends React.Component {
  render() {
    return (
      <NavigationContainer theme={theme}>
        <HomeStack />
      </NavigationContainer>
    );
  }
}

export default App;
