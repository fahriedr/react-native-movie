import React, {Component, useState} from 'react';
import {View, Text, Dimensions, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {PopularMovies} from '../api/movieApi';
const {width} = Dimensions.get('window').width;

const _onPressCarousel = (navigation, movie) => {
  // navigation.navigate('MovieDetail', {
  //   id: movie.id,
  //   title: movie.title,
  //   navigation: navigation,
  // });
};

var _renderItem = (movie) => {
  const image = {
    uri: `https://image.tmdb.org/t/p/w780${movie.item.backdrop_path}`,
  };
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 8,
        width: 350,
        height: 200,
        alignSelf: 'center',
      }}>
      <ImageBackground
        source={image}
        imageStyle={{borderRadius: 8}}
        style={{flex: 1, width: '100%'}}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#00000090',
          width: '100%',
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontFamily: 'Montserrat-Regular',
          }}>
          {movie.item.title}
        </Text>
      </View>
    </View>
  );
};

export function CardCarousel({navigation}) {
  const movies = PopularMovies().movie.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View
      style={{
        paddingTop: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}>
      <TouchableOpacity onPress={_onPressCarousel(navigation, movies)}>
        <Carousel
          containerCustomStyle={{height: 200}}
          layout={'default'}
          data={movies}
          sliderWidth={380}
          itemWidth={400}
          renderItem={_renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </TouchableOpacity>
      <Pagination
        dotsLength={movies.length}
        activeDotIndex={activeIndex}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: -5,
          backgroundColor: '#108CFF',
        }}
        inactiveDotStyle={{
          backgroundColor: '#fff',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
}
