import React from 'react';
import {Image, StyleSheet, View, Text, Pressable, Alert} from 'react-native';
// import {Card} from '@paraboly/react-native-card';

function TestCardComponent() {
  const image = {
    uri: `https://image.tmdb.org/t/p/w185/kMe4TKMDNXTKptQPAdOF0oZHq3V.jpg`,
  };

  return (
    <View>
      <Pressable onPress={() => Alert.alert('Halo')}>
        <View style={style.card}>
          <Image source={image} style={style.image} />
        </View>
      </Pressable>
      <Text style={style.title}>Judul</Text>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    width: 135,
    height: 200,
    borderRadius: 8,
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
  },
  title: {
    color: '#fff',
    marginHorizontal: 15,
    marginVertical: 5,
  },
});

export default TestCardComponent;
