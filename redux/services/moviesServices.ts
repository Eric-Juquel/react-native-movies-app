import {createAsyncThunk} from '@reduxjs/toolkit';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '7aaf1e7d85bfec33f4a9a68d9db1029b';

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
