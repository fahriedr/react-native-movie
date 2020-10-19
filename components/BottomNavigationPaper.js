import React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import HomePage from '../pages/HomePage';
import Favorites from '../pages/Favorites';
import Search from '../pages/Search';
import Account from '../pages/Account';

function BottomNavigationPaper() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Music', icon: 'queue-music'},
    {key: 'search', title: 'Albums', icon: 'album'},
    {key: 'recents', title: 'Recents', icon: 'history'},
  ]);

  return <BottomNavigation></BottomNavigation>;
}

export default BottomNavigationPaper;
