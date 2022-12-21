import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import ProfilePicture from '../ProfilePicture';
import styles from '../UserStoriesPreview/styles';

const Story = props => {
  const {
    story: {
      user: {id, imageUri, name},
    },
  } = props;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story', {userId: id});
    console.log(id);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <ProfilePicture image={imageUri} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Story;
