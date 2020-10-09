import React from 'react';
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
import {PopularMovies, TopRatedMovies} from '../api/movieApi';
// YellowBox.ignoreWarnings(['Remote debugger']);

function HomePage() {
  const popularMovies = PopularMovies().movie;
  const topRatedMovies = TopRatedMovies().movie;

  //Popular Movie
  let popular;
  if (PopularMovies().loading === true) {
    popular = <ActivityIndicator size="large" color="#0000ff" />;
  } else {
    popular = (
      <View style={style.card_container}>
        <ScrollView horizontal style={style.popular_movie}>
          {popularMovies.slice(0, 5).map((movie) => (
            <CardComponent movie={movie} key={movie.id} />
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
            <CardComponent movie={movie} key={movie.id} />
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <View>
      <Header judul={'Movie App'}></Header>
      <View style={style.body}>
        <ScrollView contentContainerStyle={{paddingBottom: 300}}>
          <View style={style.tag}>
            <Text style={style.popular_text}>Popular Movie </Text>
            <Pressable onPress={() => Alert.alert('Click')}>
              <Text style={style.popular_text}>More </Text>
            </Pressable>
          </View>
          <View style={{flex: 1}}>{popular}</View>
          <View style={style.tag}>
            <Text style={style.popular_text}>Top Rated Movie </Text>
            <Pressable onPress={() => Alert.alert('Click')}>
              <Text style={style.popular_text}>More </Text>
            </Pressable>
          </View>
          <View style={{flex: 1}}>{top_rated}</View>
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  defaultFontFamily: {
    fontFamily: 'lucida grande',
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0a0a19',
    position: 'relative',
  },
  tag: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popular_text: {
    color: '#eee',
    fontSize: 16,
    fontWeight: 'bold',
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
