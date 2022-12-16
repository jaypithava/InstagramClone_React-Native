import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const ProfilePicture = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

export default ProfilePicture;
