import {Pressable, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  handlePress(): void;
}

const PlayButton: React.FC<Props> = ({handlePress}) => {
  return (
    <Pressable style={styles.playButton} onPress={() => handlePress()}>
      <Icon name={'caret-forward-outline'} size={30} color={'#ffff'} />
    </Pressable>
  );
};

export default memo(PlayButton);

const styles = StyleSheet.create({
  playButton: {
    alignContent: 'center',
    borderRadius: 50,
    width: 50,
    padding: 10,
    backgroundColor: '#4481FC',
  },
});
