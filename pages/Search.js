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
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Header from '../components/Header';
import {SearchMovie} from '../api/movieApi';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faStar} from '@fortawesome/free-solid-svg-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function Search({navigation}) {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  let search_movie;
  if (loading === true) {
    search_movie = <ActivityIndicator size="large" color="#0000ff" />;
  } else {
    search_movie = (
      <View>
        {movies.map((movie) => (
          <Pressable
            onPress={() =>
              navigation.navigate('MovieDetail', {
                id: movie.id,
                navigation: navigation,
              })
            }
            key={movie.id}>
            <View style={style.card_container}>
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
              <View style={style.detail_container}>
                <Text
                  style={{
                    marginBottom: 6,
                    paddingHorizontal: 4,
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: 'bold',
                    width: 220,
                  }}>
                  {movie.title}{' '}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <FontAwesomeIcon
                    icon={faStar}
                    color={'yellow'}
                    style={{marginBottom: 6, marginRight: 6}}
                  />
                  <Text style={{color: '#fff'}}>{movie.vote_average}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  {movie.genre_ids.map((genres) => (
                    <Text key={genres} style={{color: '#fff'}}>
                      {genres}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    );
  }

  return (
    <View>
      <Header judul={'Search Movie'} />
      <View style={style.body}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={style.search_bar}>
            <TextInput
              style={style.text_input}
              placeholder="Search"
              underlineColorAndroid="transparent"
              autoCorrect={false}
              onChangeText={(val) => setQuery(val)}
            />
          </View>
          <View>
            <Pressable
              style={style.search_button}
              onPress={() => [
                setLoading(true),
                SearchMovie(query).then((response) => {
                  [setMovies(response.data.results), setLoading(false)];
                }),
              ]}
              android_ripple={{color: 'grey', borderless: 4}}>
              <FontAwesomeIcon icon={faSearch} />
            </Pressable>
          </View>
        </View>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{paddingBottom: 120}}>
          {search_movie}
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
    width: '80%',
    backgroundColor: 'grey',
    height: 45,
    marginLeft: 15,
    marginVertical: 4,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  text_input: {
    width: '85%',
    backgroundColor: 'transparent',
    borderColor: 'grey',
    borderWidth: 1,
    height: 40,
    borderRadius: 4,
    justifyContent: 'space-evenly',
    marginLeft: 10,
  },
  text: {
    color: '#fff',
  },
  search_button: {
    backgroundColor: '#f4d804',
    height: 45,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  card_container: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#171538',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  card: {
    width: width / 3.3,
    height: 200,
    borderRadius: 8,
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
  },
  detail_container: {
    marginVertical: 10,
    marginHorizontal: 7,
    color: '#fff',
  },
});

export default Search;
