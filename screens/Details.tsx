import {
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Movie} from './Home';
import Error from '../components/Error';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';
import PlayButton from '../components/PlayButton';

import {DetailScreenRouteProp} from '../components/Card';
import Video from '../components/Video';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {getMovieDetails} from '../redux/services/moviesServices';

const placeholderImage = require('../assets/images/placeholder.png');
const height = Dimensions.get('screen').height;

const Details = () => {
  const dispatch = useDispatch();

  const route = useRoute<DetailScreenRouteProp>();
  const movieId: Movie['id'] = route.params.movieId;

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const {movieDetails, loading, error} = useSelector(
    (state: RootState) => state.movies,
  );

  useEffect(() => {
    dispatch(getMovieDetails(movieId));
  }, [dispatch, movieId]);

  const videoShown = () => {
    setModalVisible(() => !modalVisible);
  };

  return (
    <>
      {!loading && movieDetails && !error && (
        <View>
          <ScrollView>
            <Image
              source={
                movieDetails.poster_path
                  ? {
                      uri:
                        'https://image.tmdb.org/t/p/w500' +
                        movieDetails.poster_path,
                    }
                  : placeholderImage
              }
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.textContainer}>
              <View style={styles.playButton}>
                <PlayButton handlePress={videoShown} />
              </View>
              <Text style={styles.movieTitle}>{movieDetails.title}</Text>
              {movieDetails.genres && (
                <View style={styles.genresContainer}>
                  {movieDetails.genres.map(genre => (
                    <Text key={genre.id} style={styles.genre}>
                      {genre.name}
                    </Text>
                  ))}
                </View>
              )}
              <StarRating
                disabled={true}
                maxStars={5}
                rating={movieDetails.vote_average / 2}
                fullStarColor={'gold'}
                starSize={30}
              />
              <Text style={styles.overview}>{movieDetails.overview}</Text>
              <Text style={styles.release}>{`Releade date: ${dateFormat(
                movieDetails.release_date,
                'mmmm dS, yyyy',
              )}`}</Text>
            </View>
          </ScrollView>
          <Modal
            animationType="slide"
            visible={modalVisible}
            supportedOrientations={['portrait', 'landscape']}>
            <View style={styles.videoModal}>
              <Video onClose={videoShown} />
            </View>
          </Modal>
        </View>
      )}
      {loading && (
        <View style={styles.spinner}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      {error && <Error errorText={error} />}
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  image: {
    height: height / 2.5,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  genresContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  genre: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  overview: {
    padding: 15,
  },
  release: {
    fontWeight: 'bold',
  },
  playButton: {
    position: 'absolute',
    top: -25,
    right: 20,
  },
  spinner: {
    marginTop: 100,
  },
  videoModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
