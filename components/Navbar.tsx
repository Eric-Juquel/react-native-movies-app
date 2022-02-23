import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './MainNavigation';
import Colors from '../themes/colors';

export type SearchcreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

interface Props {
  main: boolean;
}

const Navbar: React.FC<Props> = ({main = false}) => {
  const navigation = useNavigation<SearchcreenNavigationProp>();

  return (
    <View>
      {main ? (
        <View style={styles.mainNav}>
          <Image
            style={styles.logo}
            source={require('../assets/images/movies.png')}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <Icon name={'search-outline'} size={30} color={Colors.lightGrey} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name={'chevron-back'} size={40} color={Colors.lightGrey} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(Navbar);

const styles = StyleSheet.create({
  mainNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
});
