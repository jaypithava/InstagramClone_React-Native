import {FlatList} from 'react-native';
import React from 'react';
import Post from '../Post';
import Stories from '../../components/Stories';

const data = [
  {
    user: {
      imageUri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
      name: 'Hard',
    },
    subImage:
      'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Beautiful City #instagram',
    LikesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
      name: 'Hard',
    },
    subImage:
      'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Beautiful City #instagram',
    LikesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
      name: 'Hard',
    },
    subImage:
      'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Beautiful City #instagram',
    LikesCount: 1234,
    postedAt: '6 minutes ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      ListHeaderComponent={Stories}
      data={data}
      renderItem={({item}) => <Post post={item} />}
    />
  );
};

export default Feed;
