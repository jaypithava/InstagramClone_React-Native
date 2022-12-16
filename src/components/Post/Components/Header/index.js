import {View, Text} from 'react-native';
import React from 'react';
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <ProfilePicture image={imageUri} size={40} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Header;
