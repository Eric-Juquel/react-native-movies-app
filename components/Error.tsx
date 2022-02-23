import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../themes/colors';

interface Props {
  errorText: string;
}

const Error: React.FC<Props> = ({errorText}) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.text}>{errorText}</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: Colors.danger,
  },
});
