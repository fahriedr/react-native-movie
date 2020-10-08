import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Pressable,
  Alert,
} from 'react-native';
import Header from '../components/Header';
import CardComponent from '../components/CardComponent';
import {PopularMovies, TopRatedMovies} from '../api/movieApi';
import BottomNavigation from '../components/BottomNavigation';

function HomePage() {
  const size = 5;

  const popularMovies = PopularMovies();
  const topRatedMovies = TopRatedMovies();

  // console.log(popularMovies, topRatedMovies);

  return (
    <View>
      <Header judul={'Movie App'}></Header>
      <ScrollView style={{flexDirection: 'column'}}>
        <View style={style.body}>
          <View style={style.card_container}>
            <View style={style.tag}>
              <Text style={style.popular_text}>Popular Movie </Text>
              <Pressable onPress={() => Alert.alert('Click')}>
                <Text style={style.popular_text}>More </Text>
              </Pressable>
            </View>
            <ScrollView horizontal style={style.popular_movie}>
              {popularMovies.slice(0, size).map((movie) => (
                <CardComponent movie={movie} key={movie.id} />
              ))}
            </ScrollView>
          </View>
          <View style={style.card_container}>
            <View style={style.tag}>
              <Text style={style.popular_text}>Top Rated Movie </Text>
              <Pressable onPress={() => Alert.alert('Click')}>
                <Text style={style.popular_text}>More </Text>
              </Pressable>
            </View>
            <ScrollView horizontal style={style.popular_movie}>
              {topRatedMovies.slice(0, 6).map((movie) => (
                <CardComponent movie={movie} key={movie.id} />
              ))}
            </ScrollView>
          </View>
          {/* <View style={style.card_container}>
            <View style={style.tag}>
              <Text style={style.popular_text}>Top Rated Movie </Text>
              <Pressable onPress={() => Alert.alert('Click')}>
                <Text style={style.popular_text}>More </Text>
              </Pressable>
            </View>
            <ScrollView horizontal style={style.popular_movie}>
              {topRatedMovies.slice(0, 6).map((movie) => (
                <CardComponent movie={movie} key={movie.id} />
              ))}
            </ScrollView>
          </View> */}
        </View>
      </ScrollView>
      <BottomNavigation />
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
