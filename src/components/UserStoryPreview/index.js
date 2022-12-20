import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import ProfilePicture from '../ProfilePicture';
import styles from '../UserStoriesPreview/styles';

const Story = ({imageUri, name}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story');
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
