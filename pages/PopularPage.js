import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import {PopularMovies} from '../api/movieApi';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

export default function PopularPage({navigation}) {
  const movies = PopularMovies().movie;
  return (
    <View style={styles.container}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100}}
        persistentScrollbar={true}>
        {movies.map((movie, index) => (
          <CardComponent key={index} movie={movie} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
}

function CardComponent({movie, navigation}) {
  return (
    <Pressable
      style={styles.card_container}
      onPress={() =>
        navigation.navigate('MovieDetail', {
          id: movie.id,
          navigation: navigation,
        })
      }>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{uri: `https://image.tmdb.org/t/p/w185${movie.poster_path}`}}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.rating}>
          <FontAwesomeIcon icon={faStar} size={14} color={'yellow'} />
          <Text
            style={{
              marginLeft: 4,
              fontWeight: 'bold',
              color: '#fff',
              fontSize: 14,
            }}>
            {movie.vote_average}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: '#0a0a19',
  },
  card_container: {
    width: wp('92%'),
    height: hp('30%'),
    backgroundColor: 'transparent',
    borderRadius: 4,
    marginVertical: 8,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  card: {
    width: wp('33%'),
    height: hp('28%'),
    backgroundColor: 'transparent',
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  info: {
    marginHorizontal: 4,
    marginVertical: 8,
    width: wp('55%'),
    backgroundColor: 'transparent',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
