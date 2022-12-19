import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Adicon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Footer = ({LikesCount: likesCountProps, caption, postedAt}) => {
  const [isLike, setIsLiked] = useState(false);
  const [likescount, setlikescount] = useState(false);

  const onLikePress = () => {
    const amout = isLike ? -1 : 1;
    setIsLiked(!isLike);
    setlikescount(likescount + amout);
  };

  useEffect(() => {
    setlikescount(likesCountProps);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcon}>
          <TouchableWithoutFeedback onPress={onLikePress}>
            {isLike ? (
              <Adicon name="heart" size={25} color={'#ff3434'} />
            ) : (
              <Adicon name="hearto" size={25} color={'#545454'} />
            )}
          </TouchableWithoutFeedback>
          <Fontisto name="comment" size={23} color={'#545454'} />
          <Ionicons name="paper-plane-outline" size={25} color={'#545454'} />
        </View>
        <FontAwesome name="bookmark-o" size={25} color={'#545454'} />
      </View>
      <Text style={styles.like}>{likescount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
