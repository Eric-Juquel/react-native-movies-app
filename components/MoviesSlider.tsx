import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {Movie} from '../screens/Home';
import {SliderBox} from 'react-native-image-slider-box';

const dimensions = Dimensions.get('screen');

interface Props {
  content: Movie[];
}

const MoviesSlider: React.FC<Props> = ({content}) => {
  const moviesImagesArray: Movie['poster_path'][] = [];
  content.map((movie: Movie) => {
    moviesImagesArray.push(
      'https://image.tmdb.org/t/p/w500' + movie.poster_path,
    );
  });

  return (
    <View style={styles.sliderContainer}>
      <SliderBox
        images={moviesImagesArray}
        autoplay={true}
        circleLoop={true}
        sliderBoxHeight={dimensions.height / 1.5}
        dotStyle={styles.sliderStyle}
      />
    </View>
  );
};

export default MoviesSlider;

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyle: {
    height: 0,
  },
});
