import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home, {Movie} from '../screens/Home';
import Details from '../screens/Details';
import Navbar from './Navbar';
import Search from '../screens/Search';

export type RootStackParamList = {
  Home: undefined;
  Details: {movieId: Movie['id']};
  Search: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTransparent: true,
          header: () => <Navbar main={true} />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTransparent: true,
          header: () => <Navbar main={false} />,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTransparent: true,
          header: () => <Navbar main={false} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default memo(MainNavigation);
