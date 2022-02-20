import React from 'react';
import VideoPlayer from 'react-native-video-controls';

interface Props {
  onClose(): void;
}

const Video: React.FC<Props> = ({onClose}) => {
  return (
    <VideoPlayer
      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
      onBack={() => onClose()}
      onEnd={() => onClose()}
      fullScreenOrientation="all"
    />
  );
};

export default Video;
