import {createAsyncThunk} from '@reduxjs/toolkit';
import {Movie} from '../../screens/Home';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '7aaf1e7d85bfec33f4a9a68d9db1029b';

// Get Upcoming Movies
export const getUpcomingMovies = createAsyncThunk(
  'movies/getUpcoming',
  async () => {
    const response = await fetch(
      `${apiUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
    );

    const data = await response.json();

    return data.results;
  },
);

// Get Popular Movies
export const getPopularMovies = createAsyncThunk(
  'movies/getPopular',
  async () => {
    const response = await fetch(
      `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    );
    const data = await response.json();

    return data.results;
  },
);

// Get Family Movies
export const getFamilyMovies = createAsyncThunk(
  'movies/getFamily',
  async () => {
    const response = await fetch(
      `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=10751`,
    );

    const data = await response.json();

    return data.results;
  },
);

// Get Action Movies
export const getActionMovies = createAsyncThunk(
  'movies/getAction',
  async () => {
    const response = await fetch(
      `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=28`,
    );

    const data = await response.json();

    return data.results;
  },
);

// Get Movie Details
export const getMovieDetails = createAsyncThunk(
  'movies/getMovieDetail',
  async (movieId: Movie['id']) => {
    const response = await fetch(
      `${apiUrl}/movie/${movieId}?api_key=${apiKey}`,
    );

    const data = response.json();

    return data;
  },
);

// Search for Movie or Tv by Keyword
export const searchMovieTv = createAsyncThunk(
  'movies/search',
  async (queryData: {query: string; type: string}) => {
    const {query, type} = queryData;
    const response = await fetch(
      `${apiUrl}/search/${type}?api_key=${apiKey}&query=${query}`,
    );

    const data = await response.json();

    return data.results;
  },
);
