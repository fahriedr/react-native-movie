import React from 'react';
import {Image, StyleSheet, View, Text, Pressable, Alert} from 'react-native';

function CardComponent({movie}) {
  const image = {uri: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`};
  const max_length = 14;

  return (
    <View>
      <Pressable onPress={() => Alert.alert(movie.title)}>
        <View style={style.card}>
          <Image source={image} style={style.image} />
        </View>
      </Pressable>
      <Text style={style.title}>{movie.title.substring(0, max_length)}...</Text>
      <View>
        <Text style={style.rating}>{movie.vote_average}</Text>
      </View>
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
  rating: {
    color: '#fff',
    marginHorizontal: 15,
  },
});

export default CardComponent;
