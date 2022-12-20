import React from 'react';

import HomeStackScreen from './home.routes';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Adicon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        if (route.name === 'HomeStack') {
          return <Foundation name="home" size={size} color={color} />;
        }
        if (route.name === 'Discovery') {
          return <Feather name="search" size={size} color={color} />;
        }
        if (route.name === 'Post') {
          return <Feather name="plus-square" size={size} color={color} />;
        }
        if (route.name === 'Notifications') {
          return <Adicon name="hearto" size={size} color={color} />;
        }
        if (route.name === 'Profile') {
          return <Ionicons name="person-outline" size={size} color={color} />;
        }
      },
      tabBarActiveTintColor: '#000000',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel: false,
    })}>
    <Tab.Screen
      name="HomeStack"
      component={HomeStackScreen}
      options={{headerShown: false}}
    />
    <Tab.Screen name="Discovery" component={DiscoveryScreen} />
    <Tab.Screen name="Post" component={CreatePostScreen} />
    <Tab.Screen name="Notifications" component={NotificationsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default BottomHomeNavigator;
