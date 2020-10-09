import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {API_KEY, BASE_URL} from '@env';

const PopularMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    setLoading(true);
    const data = Axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    ).then((response) => [setMovie(response.data.results), setLoading(false)]);
    return () => {
      data;
    };
  }, []);

  return {movie: movie, loading: loading};
};

const TopRatedMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    setLoading(true);
    const data = Axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    ).then((response) => [setMovie(response.data.results), setLoading(false)]);
    return () => {
      data;
    };
  }, []);

  return {movie: movie, loading: loading};
};

export {PopularMovies, TopRatedMovies};
