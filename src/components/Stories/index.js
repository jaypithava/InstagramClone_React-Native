import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Story from '../Story';

const data = [
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
    name: 'Hard',
  },
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    name: 'Mandip',
  },
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/512/4140/4140051.png',
    name: 'Mit',
  },
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png',
    name: 'Ahmad Bhai',
  },
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
    name: 'jay',
  },
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    name: 'yash',
  },
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/512/4140/4140051.png',
    name: 'tofik',
  },
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png',
    name: 'hardik',
  },
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
    name: 'dharmil',
  },
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    name: 'jacob',
  },
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/512/4140/4140051.png',
    name: 'motabhai',
  },
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png',
    name: 'lal Bhai',
  },
];

const Stories = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({name}) => name}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
    //   <Story imageUri={data[0].imageUri} name={data[0].name} />
    //   <Story imageUri={data[1].imageUri} name={data[1].name} />
    //   <Story imageUri={data[2].imageUri} name={data[2].name} />
    //   <Story imageUri={data[3].imageUri} name={data[3].name} />
  );
};

export default Stories;
