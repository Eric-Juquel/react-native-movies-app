import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import MainNavigation from './components/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <MainNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
