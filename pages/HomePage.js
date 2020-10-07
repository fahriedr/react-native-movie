import React, {useState, useEffect} from 'react';
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
import Axios from 'axios';

function HomePage() {
  const API_KEY = '08c83227006639b229398cce3e84bc8a';
  const BASE_URL = 'https://api.themoviedb.org/3';

  const size = 5;
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    const data = Axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    ).then((response) => setPopularMovie(response.data.results));
    return () => {
      data;
    };
  }, []);

  console.log(popularMovie.slice(0, size));

  return (
    <View>
      <Header judul={'Movie App'}></Header>
      <View style={style.body}>
        <View style={style.tag}>
          <Text style={style.popular_text}>Popular Movie </Text>
          <Pressable onPress={() => Alert.alert('Click')}>
            <Text style={style.popular_text}>More </Text>
          </Pressable>
        </View>
        <ScrollView horizontal style={style.popular_movie}>
          {popularMovie.slice(0, size).map((movie) => (
            <CardComponent movie={movie} key={movie.id} />
          ))}
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
  },
  tag: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popular_text: {
    color: '#eee',
  },
  popular_movie: {
    flexGrow: 1,
    flex: 1,
    flexDirection: 'row',
  },
});

export default HomePage;
