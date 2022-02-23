import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView, StyleSheet} from 'react-native';
import MainNavigation from './components/MainNavigation';

import {store} from './redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <MainNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
