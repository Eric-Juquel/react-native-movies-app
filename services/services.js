import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '7aaf1e7d85bfec33f4a9a68d9db1029b';

// Get Popular Movies
export const getPopularMovies = async () => {
  const response = await axios.get(
    `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  );

  return response.data.results;
};

// Get Upcoming Movies
export const getUpcomingMovies = async () => {
  const response = await axios.get(
    `${apiUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
  );

  return response.data.results;
};

// Get Popular Tv
export const getPopularTV = async () => {
  const response = await axios.get(
    `${apiUrl}/tv/popular?api_key=${apiKey}&language=en-US&page=1`,
  );

  return response.data.results;
};

// Get Family Movies
export const getFamilyMovies = async () => {
  const response = await axios.get(
    `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=10751&language=en-US&page=1`,
  );

  return response.data.results;
};
