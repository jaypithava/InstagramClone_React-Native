import {Image, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const Body = ({imageUri}) => {
  return <Image source={{uri: imageUri}} style={styles.image} />;
};

export default Body;
