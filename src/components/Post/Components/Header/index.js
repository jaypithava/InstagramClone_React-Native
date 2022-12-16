import {View, Text} from 'react-native';
import React from 'react';
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture image={imageUri} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.right}>
        <Entypo name="dots-three-vertical" size={16} color="black" />
      </View>
    </View>
  );
};

export default Header;
