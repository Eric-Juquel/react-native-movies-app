import {ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';

import List from '../components/List';
import Error from '../components/Error';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {
  getActionMovies,
  getFamilyMovies,
  getPopularMovies,
  getUpcomingMovies,
} from '../redux/services/moviesServices';
import MoviesSlider from '../components/MoviesSlider';

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  release_date: string;
  poster_path: string;
  genres: {id: number; name: string}[];
  vote_average: number;
  overview: string;
}

const Home = () => {
  const dispatch = useDispatch();
  const {
    popularMovies,
    familyMovies,
    actionMovies,
    upcomingMovies,
    loading,
    error,
  } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(getUpcomingMovies());
    dispatch(getPopularMovies());
    dispatch(getActionMovies());
    dispatch(getFamilyMovies());
  }, [dispatch]);

  return (
    <>
      {!loading && !error && (
        <ScrollView>
          {upcomingMovies && <MoviesSlider content={upcomingMovies} />}
          {popularMovies && (
            <List title={'Popular Movies'} content={popularMovies} />
          )}
          {actionMovies && (
            <List title={'Action Movies'} content={actionMovies} />
          )}
          {familyMovies && (
            <List title={'Family Movies'} content={familyMovies} />
          )}
        </ScrollView>
      )}

      {loading && <ActivityIndicator size="large" />}
      {error && <Error errorText={error} />}
    </>
  );
};

export default Home;
