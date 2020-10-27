import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import Asm from '../model/asyncStorage';
import {DetailMovie} from '../api/movieApi';

function Favorites() {
  const [ids, setids] = useState([]);
  const [movies, setMovies] = useState([]);

  Asm.getAllData().then((res) => setMovies(res));

  console.log(movies);
  return (
    <View>
      {movies.map((movie, index) => (
        <View key={index}>
          <Text>{movie.id}</Text>
          <Text>{movie.title}</Text>
        </View>
      ))}
      <Button title="Delete" onPress={() => Asm.deleteData(724089)} />
    </View>
  );
}

export default Favorites;
