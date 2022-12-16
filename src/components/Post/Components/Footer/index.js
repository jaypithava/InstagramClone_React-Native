import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Adicon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Footer = ({LikesCount, caption, postedAt}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcon}>
          <Adicon name="hearto" size={25} color={'#545454'} />
          <Fontisto name="comment" size={23} color={'#545454'} />
          <Ionicons name="paper-plane-outline" size={25} color={'#545454'} />
        </View>
        <FontAwesome name="bookmark-o" size={25} color={'#545454'} />
      </View>
      <Text style={styles.like}>{LikesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
