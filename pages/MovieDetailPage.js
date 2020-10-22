import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import {DetailMovie} from '../api/movieApi';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faClock, faStar} from '@fortawesome/free-solid-svg-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CardComponent from '../components/CardComponent';
const {width} = Dimensions.get('window');
import _ from 'lodash';

function MovieDetailPage({route, navigation}) {
  const {id} = route.params;
  const movie = DetailMovie(id).movie;
  const credits = DetailMovie(id).cast;

  console.log(movie);
  const imageBg = {
    uri: `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`,
  };
  const poster = {
    uri: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`,
  };

  const {genres} = movie;
  const {cast} = credits;

  console.log(cast);

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#0a0a19'}}>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          position: 'relative',
        }}>
        <ScrollView
          style={{flex: 1, backgroundColor: 'transparent'}}
          contentContainerStyle={{paddingBottom: 300}}>
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'transparent',
              width: '100%',
              height: 350,
              alignSelf: 'center',
            }}>
            <ImageBackground
              source={movie.backdrop_path ? imageBg : poster}
              style={{flex: 1, width: '100%'}}>
              <LinearGradient
                colors={['transparent', 'transparent', '#0a0a19']}
                style={{
                  flex: 1,
                  width: '100%',
                  height: 120,
                  bottom: 0,
                }}
              />
            </ImageBackground>
          </View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#fff',
              borderRadius: 20,
              top: 10,
              left: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <BackButton navigation={navigation} />
          </View>
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              backgroundColor: 'transparent',
              top: 200,
              left: 20,
              marginRight: 20,
            }}>
            <View
              style={{
                width: width / 3,
                height: 200,
                borderRadius: 8,
                backgroundColor: 'transparent',
                marginRight: 8,
              }}>
              <Image
                source={poster}
                style={{flex: 1, width: '100%', borderRadius: 8}}
              />
            </View>
            <View
              style={{
                width: '60%',
                borderRadius: 8,
                flexDirection: 'column',
                paddingLeft: 8,
              }}>
              <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold'}}>
                {movie.title}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesomeIcon icon={faClock} size={12} color={'white'} />
                <Text style={{color: '#fff', fontSize: 14, marginLeft: 4}}>
                  {movie.runtime}min{' '}
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 2}}>
                {_.map(genres, (genre, index) => (
                  <BadgeGenre name={genre.name} key={index} />
                ))}
              </View>
              <Rating rating={movie.vote_average} />
            </View>
          </View>

          <View
            style={{
              left: 20,
              top: 230,
              width: '90%',
              backgroundColor: 'transparent',
            }}>
            <Text style={{color: '#fff', fontSize: 18}}>Synopsis</Text>
            <Text
              textBreakStrategy={'simple'}
              style={{
                color: '#fff',
                fontSize: 14,
                marginVertical: 8,
                backgroundColor: 'transparent',
                // alignSelf: 'stretch',
                textAlign: 'justify',
                lineHeight: 18,
              }}>
              {movie.overview}
            </Text>
          </View>
          <View
            style={{
              marginVertical: 2,
              flex: 1,
              backgroundColor: 'transparent',
              left: 20,
              top: 250,
              width: '90%',
            }}>
            <Text style={{fontSize: 18, color: '#fff'}}>Cast</Text>
            <ScrollView
              horizontal
              style={{
                flexGrow: 1,
                flex: 1,
                flexDirection: 'row',
                marginVertical: 4,
              }}>
              {_.map(_.take(cast, 10), (cast, index) => (
                <ActorList cast={cast} key={index} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={{
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FontAwesomeIcon icon={faArrowLeft} size={20} />
    </TouchableOpacity>
  );
};

const BadgeGenre = ({name}) => {
  return (
    <View
      style={{
        backgroundColor: 'grey',
        marginRight: 4,
        borderRadius: 2,
        paddingHorizontal: 2,
      }}>
      <Text style={{fontSize: 10}}>{name} </Text>
    </View>
  );
};

const Rating = ({rating}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 2, alignItems: 'center'}}>
      <FontAwesomeIcon icon={faStar} size={16} color={'yellow'} />
      <Text style={{color: '#fff', marginLeft: 2, marginTop: 2, fontSize: 16}}>
        {rating}
      </Text>
    </View>
  );
};

const ActorList = ({cast}) => {
  // const image = { uri : `https://image.tmdb.org/t/p/w185/${casts}`}
  // console.log(cast);
  return (
    <Pressable>
      <View
        style={{
          width: width / 3.3,
          height: 200,
          borderRadius: 8,
          marginRight: 15,
          marginVertical: 5,
          backgroundColor: '#fff',
        }}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w185/${cast.profile_path}`,
          }}
          style={{flex: 1, width: '100%', borderRadius: 8}}
        />
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text style={{color: '#fff'}}>{cast.name}</Text>
        <Text style={{color: '#fff'}}>as</Text>
        <Text style={{color: '#fff'}}>{cast.character}</Text>
      </View>
    </Pressable>
  );
};

export default MovieDetailPage;
