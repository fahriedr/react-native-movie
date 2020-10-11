import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import {SearchMovie} from '../api/movieApi';
const {width} = Dimensions.get('window');

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      movies: [],
    };
  }

  componentDidMount = (e) => {
    SearchMovie(e)
      .then((response) => {
        this.setState({movies: response.data.results});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handlerChange = (e) => {
    this.setState({query: e});
  };

  render() {
    console.log(this.state.movies);
    console.log(this.state.query);
    const image = {uri: `https://image.tmdb.org/t/p/w185`};
    return (
      <View>
        <Header judul={null} data={this.componentDidMount} />
        <View style={style.body}>
          <ScrollView style={{flex: 1}}>
            {this.state.movies.slice(0, 5).map((movies) => (
              <View style={style.card_container}>
                <View style={style.card}>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w185${movies.poster_path}`,
                    }}
                    style={style.image}
                  />
                </View>
              </View>
              // <Text
              //   style={
              //     style.text
              //   }>{`https://image.tmdb.org/t/p/w185${movies.poster_path}`}</Text>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0a0a19',
    position: 'relative',
  },
  text: {
    color: '#fff',
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
