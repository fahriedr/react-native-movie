import React, {Component, useState} from 'react';
import {View, Text, SafeAreaView, Image, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {PopularMovies} from '../api/movieApi';
const {width} = Dimensions.get('window').width;

var _renderItem = (movie) => {
  const image = {
    uri: `https://image.tmdb.org/t/p/w780${movie.item.poster_path}`,
  };
  console.log(movie.item.poster_path);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 350,
        height: 180,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
        alignSelf: 'center',
      }}>
      <Image source={image} style={{flex: 1, width: '100%', borderRadius: 8}} />
    </View>
  );
};

var pagination = () => {
  const data = PopularMovies().movie.slice(0, 5);
  const activeIndex = 0;
  const movies = data;
  return (
    <Pagination
      dotsLength={movies.length}
      activeDotIndex={activeIndex}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: -2,
        backgroundColor: '#108CFF',
      }}
      inactiveDotStyle={{
        backgroundColor: '#fff',
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
};

export function CardCarousel() {
  const movies = PopularMovies().movie.slice(0, 7);
  const [activeIndex, setActiveIndex] = useState(0);

  let movie_poster;
  movies.map((movie) => {
    movie_poster = movie.backdrop_path;
  });

  //   console.log(movie_poster);

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Carousel
          layout={'default'}
          //   ref={(ref) => (this.carousel = ref)}
          data={movies}
          sliderWidth={100}
          itemWidth={410}
          renderItem={_renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
      {pagination}
    </SafeAreaView>
  );
}

// export class CardCarousel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeIndex: 0,
//       carouselItems: [
//         {
//           title: 'Item 1',
//           text: 'Text 1',
//         },
//         {
//           title: 'Item 2',
//           text: 'Text 2',
//         },
//         {
//           title: 'Item 3',
//           text: 'Text 3',
//         },
//         {
//           title: 'Item 4',
//           text: 'Text 4',
//         },
//         {
//           title: 'Item 5',
//           text: 'Text 5',
//         },
//       ],
//       movies: [],
//     };
//   }

//   componentDidMount() {
//     const movies = PopularMovies().movie;
//   }

//   _renderItem = (item, index) => {
//     return (
//       <View
//         style={{
//           backgroundColor: 'floralwhite',
//           borderRadius: 5,
//           width: 350,
//           height: 180,
//           padding: 50,
//           marginLeft: 25,
//           marginRight: 25,
//           alignSelf: 'center',
//         }}>
//         <Image source={{}} />
//       </View>
//     );
//   };

//   get pagination() {
//     const {carouselItems, activeIndex} = this.state;
//     return (
//       <Pagination
//         dotsLength={carouselItems.length}
//         activeDotIndex={activeIndex}
//         dotStyle={{
//           width: 10,
//           height: 10,
//           borderRadius: 5,
//           marginHorizontal: -2,
//           backgroundColor: '#108CFF',
//         }}
//         inactiveDotStyle={{
//           backgroundColor: '#fff',
//         }}
//         inactiveDotOpacity={0.4}
//         inactiveDotScale={0.6}
//       />
//     );
//   }

//   render() {
//     return (
//       <SafeAreaView
//         style={{flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50}}>
//         {/* <View style={{flexDirection: 'column'}}> */}
//         <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
//           <Carousel
//             layout={'default'}
//             ref={(ref) => (this.carousel = ref)}
//             data={this.state.carouselItems}
//             sliderWidth={100}
//             itemWidth={410}
//             renderItem={this._renderItem}
//             onSnapToItem={(index) => this.setState({activeIndex: index})}
//           />
//         </View>
//         {/* </View> */}
//         {this.pagination}
//       </SafeAreaView>
//     );
//   }
// }
