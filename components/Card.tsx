import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {Movie} from '../screens/Home';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './MainNavigation';

export type DetailscreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;
export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface Props {
  item: Movie;
}

const placeholderImage = require('../assets/images/placeholder.png');

const Card: React.FC<Props> = ({item}) => {
  const navigation = useNavigation<DetailscreenNavigationProp>();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate('Details', {movieId: item.id})}>
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

export default memo(Card);

const styles = StyleSheet.create({
  cardContainer: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    height: 200,
    marginBottom: 8,
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
