import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  Alert,
  Dimensions,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
const {width} = Dimensions.get('window');

var month_name = function (dt) {
  let newDt = new Date(dt);
  let mlist = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return mlist[newDt.getMonth()];
};

function CardComponent({movie}) {
  const image = {uri: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`};
  const max_length = 18;

  let title = movie.title;
  let date = new Date(movie.release_date);
  let month = month_name(date);

  let fullDate =
    date.getDate() + ' ' + month.substring(0, 3) + ', ' + date.getFullYear();

  if (title.length > max_length) {
    title = title.substring(0, max_length) + '...';
  }

  // console.log(movie);

  return (
    <View>
      <Pressable onPress={() => Alert.alert(movie.title)}>
        <View style={style.card}>
          <Image source={image} style={style.image} />
        </View>
      </Pressable>
      <Text style={style.title}>{title}</Text>
      <Text style={style.release_date}>{fullDate}</Text>
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
    width: width / 3,
    height: 230,
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
  release_date: {
    color: '#fff',
    fontSize: 12,
    marginHorizontal: 15,
    marginBottom: 5,
  },
  rating: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
});

export default CardComponent;
