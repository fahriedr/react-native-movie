import React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import HomePage from '../pages/HomePage';
import Favorites from '../pages/Favorites';
import Search from '../pages/Search';
import ProfilePage from '../pages/ProfilePage';

function BottomNavigationPaper() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'search', title: 'Search', icon: 'magnify'},
    {key: 'favorites', title: 'Favorites', icon: 'bookmark'},
    {key: 'profile', title: 'Profile', icon: 'account'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomePage,
    search: Search,
    favorites: Favorites,
    profile: ProfilePage,
  });

  return (
    <BottomNavigation
      style={{borderTopColor: 'grey'}}
      onIndexChange={setIndex}
      navigationState={{index, routes}}
      renderScene={renderScene}
    />
  );
}

export default BottomNavigationPaper;
