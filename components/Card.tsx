import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Movie} from '../screens/Home';

interface Props {
  item: Movie;
}

const placeholderImage = require('../assets/images/placeholder.png');

const Card: React.FC<Props> = ({item}) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image
        source={
          item.poster_path
            ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
            : placeholderImage
        }
        style={styles.image}
        resizeMode="cover"
      />
      {!item.poster_path && <Text style={styles.movieName}>{item.title}</Text>}
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    height: 200,
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieName: {
    position: 'absolute',
    width: 100,
    textAlign: 'center',
    top: 20,
  },
});
