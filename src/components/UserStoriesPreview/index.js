import {FlatList} from 'react-native';
import React from 'react';
import Story from '../UserStoryPreview';
import styles from './styles';
import storiesData from '../../data/stories';

const Stories = () => {
  return (
    <FlatList
      data={storiesData}
      keyExtractor={({user: {id}}) => id}
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Story story={item} />}
    />
    //   <Story imageUri={data[0].imageUri} name={data[0].name} />
    //   <Story imageUri={data[1].imageUri} name={data[1].name} />
    //   <Story imageUri={data[2].imageUri} name={data[2].name} />
    //   <Story imageUri={data[3].imageUri} name={data[3].name} />
  );
};

export default Stories;
