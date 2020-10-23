import React, {useState, useEffect, Component} from 'react';
import Axios from 'axios';
import {API_KEY, BASE_URL} from '@env';
import {set} from 'react-native-reanimated';

const NowPlayingMovies = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const data = Axios.get(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    )
      .then((response) => [setMovie(response.data.results), setLoading(false)])
      .catch((err) => setMovie(err));
    return () => {
      data;
    };
  }, []);

  return {movie: movie, loading: loading};
};

const PopularMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    setLoading(true);
    const data = Axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
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

const SearchMovie = async (query) => {
  let movie = [];
  let loading = true;

  await Axios.get(
    `${BASE_URL}/search/movie/?query=${query}&api_key=${API_KEY}  `,
  ).then((response) => {
    movie = response;
  });

  return movie;
};

const DetailMovie = (id) => {
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const data = Axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`,
    ).then((response) => setMovie(response.data));
    const data2 = Axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
    ).then((response) => setCast(response.data));
    const data3 = Axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`,
    ).then((response) => setVideos(response.data));
    return () => {
      [data, data2];
    };
  }, []);

  return {movie: movie, cast: cast, videos: videos};
};

// export default MovieApi;
export {
  NowPlayingMovies,
  PopularMovies,
  TopRatedMovies,
  SearchMovie,
  DetailMovie,
};
