import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import Header from '../components/Header';
import {SearchMovie} from '../api/movieApi';
import {TextInput} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  console.log(movies);

  return (
    <View>
      <Header judul={'Search Movie'} />
      <View style={style.body}>
        <View style={style.search_bar}>
          <TextInput
            style={style.text_input}
            placeholder="Search"
            underlineColorAndroid="transparent"
            onChangeText={(val) => setQuery(val)}
          />
          <View>
            <Pressable
              style={style.search_button}
              onPress={() =>
                SearchMovie(query).then((response) => {
                  setMovies(response.data.results);
                })
              }
              android_ripple={{color: 'grey', borderless: 4}}>
              <FontAwesomeIcon icon={faSearch} />
            </Pressable>
          </View>
        </View>
        <ScrollView style={{flex: 1}}>
          {movies.map((movie) => (
            <Pressable onPress={() => Alert.alert(movie.title)}>
              <View style={style.card_container} key={movie.id}>
                <View style={style.card}>
                  {movie.poster_path && (
                    <Image
                      style={style.image}
                      source={{
                        uri: `https://image.tmdb.org/t/p/w185${movie.poster_path}`,
                      }}
                    />
                  )}
                  {!movie.poster_path && (
                    <Image
                      style={style.image}
                      source={require('../assets/img/no-image-available.jpeg')}
                    />
                  )}
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0a0a19',
    position: 'relative',
  },
  search_bar: {
    backgroundColor: 'grey',
    height: 45,
    marginHorizontal: 15,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  text_input: {
    width: '85%',
    backgroundColor: 'transparent',
    borderColor: 'grey',
    borderWidth: 1,
    height: 40,
    borderRadius: 4,
    justifyContent: 'space-evenly',
  },
  text: {
    color: '#fff',
  },
  search_button: {
    marginLeft: 4,
    backgroundColor: '#2ff9f6',
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  card_container: {
    margin: 10,
  },
  card: {
    width: width / 3,
    height: 220,
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
});

export default Search;
