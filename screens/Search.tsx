import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = () => {
  const navigation = useNavigation();

  const [text, setText] = useState('');

  const onSubmit = query => {
    console.log(query);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder={'Search Movie ot Tv Show'}
        />
      </View>
      <TouchableOpacity onPress={() => onSubmit(text)}>
        <Icon name="search-outline" size={30} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingRight: 8,
  },
  input: {
    borderRadius: 15,
    borderWidth: 0.5,
    height: 50,
    padding: 8,
  },
});
