import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const Footer = ({LikesCount, caption, postedAt}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.like}>{LikesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
