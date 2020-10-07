import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = ({judul}) => {
  return (
    <View style={style.header}>
      <View style={style.headerContent}>
        <Text style={style.headerText}>{judul}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#0a0a19',
    elevation: 15,
    justifyContent: 'center',
  },
  headerContent: {
    margin: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Header;
