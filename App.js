import {View, StatusBar, Image} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DiscoveryScreen from './src/screens/DiscoveryScreen';
import CreatePostScreen from './src/screens/CreatePostScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Adicon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import instagramLogo from './src/assets/images/logo.png';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
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
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
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
              return (
                <Ionicons name="person-outline" size={size} color={color} />
              );
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
    </NavigationContainer>
  );
};

export default App;
