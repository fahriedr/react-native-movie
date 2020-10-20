import React from 'react';
import {View, Text} from 'react-native';

function MovieDetailPage({route, navigation}) {
  const {id, title} = route.params;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default MovieDetailPage;
