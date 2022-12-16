import {View, Text} from 'react-native';
import React from 'react';
import ProfilePicture from '../ProfilePicture';
import styles from '../Stories/styles';

const Story = ({imageUri, name}) => {
  return (
    <View>
      <ProfilePicture image={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Story;
