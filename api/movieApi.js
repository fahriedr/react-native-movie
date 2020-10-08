import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {API_KEY, BASE_URL} from '@env';

const PopularMovies = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const data = Axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    ).then((response) => setMovie(response.data.results));
    return () => {
      data;
    };
  }, []);

  return movie;
};

const TopRatedMovies = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const data = Axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    ).then((response) => setMovie(response.data.results));
    return () => {
      data;
    };
  }, []);

  return movie;
};

export {PopularMovies, TopRatedMovies};
