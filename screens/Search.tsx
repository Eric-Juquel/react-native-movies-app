import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Card from '../components/Card';
import {Movie} from './Home';
import Error from '../components/Error';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {searchMovieTv} from '../redux/services/moviesServices';

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState('');

  const {filteredMovies, error, loading} = useSelector(
    (state: RootState) => state.movies,
  );

  const onSubmit = (query: string) => {
    dispatch(searchMovieTv({query: query, type: 'movie'}));
  };

  const renderItem = useCallback(
    ({item}: {item: Movie}) => <Card item={item} />,
    [],
  );

  const keyExtractor = useCallback(item => item.id.toString(), []);

  return (
    <View>
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
      <View style={styles.searchItems}>
        {filteredMovies && filteredMovies.length > 0 && (
          <FlatList
            numColumns={3}
            data={filteredMovies}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        )}
        {filteredMovies && filteredMovies.length === 0 && (
          <View style={styles.noResults}>
            <Text>No results matching your criteria.</Text>
            <Text>Try different keywords</Text>
          </View>
        )}
        {!filteredMovies && (
          <View style={styles.noResults}>
            <Text>Type something to start searching.</Text>
          </View>
        )}
        {loading && <ActivityIndicator size="large" />}
        {error && <Error errorText="something went wrong" />}
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 60,
    marginBottom: 10,
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
  searchItems: {
    padding: 5,
  },

  noResults: {
    alignItems: 'center',
    paddingTop: 20,
  },
});
