import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  // getPopularMovies,
  getUpcomingMovies,
  getFamilyMovies,
  getActionMovies,
} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
import Error from '../components/Error';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {getPopularMovies} from '../redux/services/moviesServices';

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

const dimensions = Dimensions.get('screen');

const Home = () => {
  const dispatch = useDispatch();
  const {
    popularMovies,
    loading,
    error: reduxError,
  } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  console.log('popularMovies', popularMovies);

  const [movieImages, setMovieImages] = useState<Movie['poster_path'][]>([]);
  // const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [actionMovies, setActionMovies] = useState<Movie[]>([]);
  const [familyMovies, setFamilyMovies] = useState<Movie[]>([]);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      // getPopularMovies(),
      getActionMovies(),
      getFamilyMovies(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMoviesData,
          // popularMoviesData,
          actionMoviesData,
          familyMoviesData,
        ]) => {
          const moviesImagesArray: Movie['poster_path'][] = [];
          upcomingMoviesData.map((movie: Movie) => {
            moviesImagesArray.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });
          setMovieImages(moviesImagesArray);
          // setPopularMovies(popularMoviesData);
          setActionMovies(actionMoviesData);
          setFamilyMovies(familyMoviesData);
        },
      )
      .catch(err => {
        console.log('error', err.message);
        setError(true);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <>
      {loaded && !error && (
        <ScrollView>
          {movieImages && (
            <View style={styles.sliderContainer}>
              <SliderBox
                images={movieImages}
                autoplay={true}
                circleLoop={true}
                sliderBoxHeight={dimensions.height / 1.5}
                dotStyle={styles.sliderStyle}
              />
            </View>
          )}
          {popularMovies && (
            <View style={styles.carousel}>
              <List title={'Popular Movies'} content={popularMovies} />
            </View>
          )}
          {actionMovies && (
            <View style={styles.carousel}>
              <List title={'Action Movies'} content={actionMovies} />
            </View>
          )}
          {familyMovies && (
            <View style={styles.carousel}>
              <List title={'Family Movies'} content={familyMovies} />
            </View>
          )}
        </ScrollView>
      )}

      {!loaded && <ActivityIndicator size="large" />}
      {error && <Error errorText="An Error Occurred!" />}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
