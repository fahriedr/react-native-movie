import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Pressable,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Header from '../components/Header';
import CardComponent from '../components/CardComponent';
import {PopularMovies, TopRatedMovies, NowPlayingMovies} from '../api/movieApi';
import {CardCarousel} from '../components/CardCarousel';

function HomePage({navigation}) {
  const popularMovies = PopularMovies().movie;
  const topRatedMovies = TopRatedMovies().movie;
  const nowPlayingMovies = NowPlayingMovies().movie;

  let now_playing;
  if (NowPlayingMovies().loading === true) {
    now_playing = <ActivityIndicator size="large" color="#0000ff" />;
  } else {
    now_playing = (
      <View style={style.card_container}>
        <ScrollView horizontal style={style.popular_movie}>
          {nowPlayingMovies.slice(0, 5).map((movie) => (
            <CardComponent
              movie={movie}
              key={movie.id}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>
    );
  }

  //Popular Movie
  let popular;
  if (PopularMovies().loading === true) {
    popular = <ActivityIndicator size="large" color="#0000ff" />;
  } else {
    popular = (
      <View style={style.card_container}>
        <ScrollView horizontal style={style.popular_movie}>
          {popularMovies.slice(0, 5).map((movie) => (
            <CardComponent
              movie={movie}
              key={movie.id}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>
    );
  }

  // Top Rated Movie
  let top_rated;
  if (TopRatedMovies().loading === true) {
    top_rated = <ActivityIndicator size="large" color="#0000ff" />;
  } else {
    top_rated = (
      <View style={style.card_container}>
        <ScrollView horizontal style={style.popular_movie}>
          {topRatedMovies.slice(0, 5).map((movie) => (
            <CardComponent
              movie={movie}
              key={movie.id}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <SafeAreaView>
      {/* <View> */}
      <Header judul={'Movie App'} />
      <View style={style.body}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{paddingBottom: 130}}>
          <CardCarousel navigation={navigation} />
          <View style={style.tag}>
            <Text style={style.tag_text}>Now Playing Movie </Text>
            <Pressable onPress={() => navigation.navigate('NowPlaying')}>
              <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
                More{' '}
              </Text>
            </Pressable>
          </View>
          <View style={{flex: 1}}>{now_playing}</View>
          <View style={style.tag}>
            <Text style={style.tag_text}>Popular Movie </Text>
            <Pressable onPress={() => navigation.navigate('PopularPage')}>
              <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
                More{' '}
              </Text>
            </Pressable>
          </View>
          <View style={{flex: 1}}>{popular}</View>
          <View style={style.tag}>
            <Text style={style.tag_text}>Top Rated Movie </Text>
            <Pressable onPress={() => navigation.navigate('TopRated')}>
              <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
                More{' '}
              </Text>
            </Pressable>
          </View>
          <View style={{flex: 1}}>{top_rated}</View>
        </ScrollView>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  defaultFontFamily: {
    fontFamily: 'Montserrat-Reguler',
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0a0a19',
    position: 'relative',
  },
  carousel: {
    width: 135,
    height: 230,
    borderRadius: 8,
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  tag: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tag_text: {
    color: '#eee',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
  popular_movie: {
    flexGrow: 1,
    flex: 1,
    flexDirection: 'row',
  },
  card_container: {
    marginVertical: 8,
  },
});

export default HomePage;
