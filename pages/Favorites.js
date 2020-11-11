import React, {Component} from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Asm from '../model/asyncStorage';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../components/Header';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: '',
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
    console.log(this.state.movies);
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
        <ScrollView
          // style={{flex: 1}}
          contentContainerStyle={{paddingBottom: 60}}
          persistentScrollbar={true}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#0a0a19',
              elevation: 10,
            }}>
            <View
              style={{
                flex: 1,
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
            {this.state.movies.map((movie, index) => (
              <CardComponent
                key={index}
                movie={movie}
                navigation={this.props.navigation}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const CardComponent = ({movie, navigation}) => {
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
          source={{
            uri: `https://image.tmdb.org/t/p/w185${movie.poster}`,
          }}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
    </Pressable>
  );
};

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
    fontSize: 18,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Favorites;
