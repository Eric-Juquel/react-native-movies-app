import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Movie} from '../screens/Home';
import Card from './Card';

interface Props {
  title: string;
  content: Movie[];
}

const List: React.FC<Props> = ({title, content}) => {
  const renderItem = ({item}: {item: Movie}) => {
    return <Card item={item} />;
  };

  return (
    <View style={styles.list}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        <FlatList data={content} horizontal={true} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    marginTop: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});
