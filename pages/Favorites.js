import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Asm from '../model/asyncStorage';
import AsyncStorage from '@react-native-community/async-storage';
import {set} from 'lodash';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const keys = await Asm.getAllData();
    keys.map(async (key) => {
      let movie = await AsyncStorage.getItem(key);
      let jsonParse = await JSON.parse(movie);
      this.setState({movies: [...this.state.movies, jsonParse]});
    });
  }

  // componentDidUpdate() {
  //   this.refresh();
  // }

  async refresh() {
    this.setState({movies: []});
    const keys = await Asm.getAllData();
    keys.map(async (key) => {
      let movie = await AsyncStorage.getItem(key);
      let jsonParse = await JSON.parse(movie);
      this.setState({movies: [...this.state.movies, jsonParse]});
    });
  }

  render() {
    let text;
    if (this.state.movies.length === 0) {
      <Text>List is Empty</Text>;
    } else {
      {
        this.state.movies.map((movie, index) => (
          <Text key={index}>{movie.title}</Text>
        ));
      }
    }

    return (
      <View style={{margin: 10}}>
        {this.state.movies.map((movie, index) => (
          <Text key={index}>{movie.title}</Text>
        ))}
        <TouchableOpacity
          style={{
            marginVertical: 10,
            backgroundColor: '#2196F3',
            padding: 10,
            width: '50%',
            alignSelf: 'center',
            elevation: 8,
            borderRadius: 2,
          }}
          onPress={() => [Asm.deleteAllData(), this.refresh()]}>
          <Text style={{textAlign: 'center', color: 'white'}}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: 10,
            backgroundColor: '#2196F3',
            padding: 10,
            width: '50%',
            alignSelf: 'center',
            elevation: 8,
            borderRadius: 2,
          }}
          onPress={() => this.refresh()}>
          <Text style={{textAlign: 'center', color: 'white'}}>Refresh</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Favorites;
