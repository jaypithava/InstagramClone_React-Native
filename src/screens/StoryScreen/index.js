import {
  SafeAreaView,
  ActivityIndicator,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
  View,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import storiesData from '../../data/stories';
import styles from '../StoryScreen/styles';
import {useRoute, useNavigation} from '@react-navigation/native';
import ProfilePicture from '../../components/ProfilePicture';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StoryScreen = () => {
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  // const [activeStory, setActiveStory] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params.userId;
  console.log(userId);

  useEffect(() => {
    //const userId = route.params.userId;
    const userStories = storiesData.find(
      storiesData => storiesData.user.id === userId,
    );
    setUserStories(userStories);
    setActiveStoryIndex(0);
  }, []);

  const navigateToNextUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) + 1).toString()});
  };

  const navigateToPrevUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) - 1).toString()});
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPrevUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = evt => {
    console.log(evt.nativeEvent);
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;
    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };
  useEffect(() => {
    if (!userStories) {
      return;
    }
    if (activeStoryIndex < 0) {
      setActiveStoryIndex(0);
    }
    if (activeStoryIndex >= userStories.stories.length) {
      setActiveStoryIndex(userStories.stories.length - 1);
      return;
    }
    //setActiveStory(userStories.stories[activeStoryIndex]);
  }, []);

  console.log(userStories);

  if (!userStories) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = userStories.stories[activeStoryIndex];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground
          source={{uri: activeStory.imageUri}}
          style={styles.image}>
          <View style={styles.userInfo}>
            <ProfilePicture image={userStories.user.imageUri} size={50} />
            <Text style={styles.userName}>{userStories.user.name}</Text>
            <Text style={styles.userName}>{activeStory.postedTime}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color={'#000'} />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Send Message"
                placeholderTextColor={'#fff'}
              />
            </View>
            <View style={styles.messageButton}>
              <Ionicons
                name="paper-plane-outline"
                size={35}
                color={'#545454'}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
