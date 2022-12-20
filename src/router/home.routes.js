import React from 'react';
import {View, Image} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import instagramLogo from '../assets/images/logo.png';

const HomeStack = createNativeStackNavigator();

const HomeRoutes = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Instagram',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <View style={{marginLeft: 10}}>
            <Feather name="camera" size={25} color="#000000" />
          </View>
        ),
        headerTitle: () => (
          <Image
            source={instagramLogo}
            resizeMode="cover"
            style={{width: 135, height: 42}}
          />
        ),

        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: 15}}>
              <Feather name="plus-square" size={25} color="#000000" />
            </View>
            <Fontisto name="messenger" size={25} color="#000000" />
          </View>
        ),
      }}
    />
  </HomeStack.Navigator>
);

export default HomeRoutes;
