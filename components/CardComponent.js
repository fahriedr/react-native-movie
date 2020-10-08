import React from 'react';
import {Image, StyleSheet, View, Text, Pressable, Alert} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

function CardComponent({movie}) {
  const image = {uri: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`};
  const max_length = 18;

  let title = movie.title;

  if (title.length > max_length) {
    title = title.substring(0, max_length) + '...';
  }

  return (
    <View>
      <Pressable onPress={() => Alert.alert(movie.title)}>
        <View style={style.card}>
          <Image source={image} style={style.image} />
        </View>
      </Pressable>
      <Text style={style.title}>{title}</Text>
      <View style={style.rating}>
        <FontAwesomeIcon
          icon={faStar}
          color={'yellow'}
          size={16}
          style={{marginRight: 4}}
        />
        <Text style={{color: '#fff'}}>{movie.vote_average}</Text>
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
    flexDirection: 'row',
    marginHorizontal: 15,
  },
});

export default CardComponent;
