import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const ProfilePicture = ({image, size = 70}) => {
  return (
    <View style={[styles.container, {width: size + 6, height: size + 6}]}>
      <Image
        source={{uri: image}}
        style={[styles.image, {width: size, height: size}]}
      />
    </View>
  );
};

export default ProfilePicture;
