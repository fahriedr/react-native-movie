import React, {Component} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import Asm from '../model/asyncStorage';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../components/Header';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      query: '',
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
      <View>
        <Header judul={'Bookmark'} />
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#0a0a19',
            elevation: 10,
          }}>
          <View
            style={{
              width: '90%',
              backgroundColor: 'grey',
              height: 45,
              marginVertical: 4,
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <TextInput
              style={{
                width: '85%',
                backgroundColor: 'transparent',
                borderColor: 'grey',
                borderWidth: 1,
                height: 40,
                borderRadius: 4,
                justifyContent: 'space-evenly',
                marginLeft: 5,
              }}
              placeholder="Search"
              underlineColorAndroid="transparent"
              autoCorrect={false}
              onChangeText={(val) => this.setState({query: val})}
            />
            <Pressable
              style={{
                backgroundColor: '#f4d804',
                height: 45,
                width: 45,
                marginLeft: 5,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-end',
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
              }}
              onPress={() => {}}
              android_ripple={{color: 'grey', borderless: 4}}>
              <FontAwesomeIcon icon={faSearch} />
            </Pressable>
          </View>
        </View>
      </View>
    );

    // return (
    //   <View style={{margin: 10}}>
    //     {this.state.movies.map((movie, index) => (
    //       <Text key={index}>{movie.title}</Text>
    //     ))}
    //     <TouchableOpacity
    //       style={{
    //         marginVertical: 10,
    //         backgroundColor: '#2196F3',
    //         padding: 10,
    //         width: '50%',
    //         alignSelf: 'center',
    //         elevation: 8,
    //         borderRadius: 2,
    //       }}
    //       onPress={() => [Asm.deleteAllData(), this.refresh()]}>
    //       <Text style={{textAlign: 'center', color: 'white'}}>Delete</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={{
    //         marginVertical: 10,
    //         backgroundColor: '#2196F3',
    //         padding: 10,
    //         width: '50%',
    //         alignSelf: 'center',
    //         elevation: 8,
    //         borderRadius: 2,
    //       }}
    //       onPress={() => this.refresh()}>
    //       <Text style={{textAlign: 'center', color: 'white'}}>Refresh</Text>
    //     </TouchableOpacity>
    //   </View>
    // );
  }
}

export default Favorites;
