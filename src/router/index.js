import {createNativeStackNavigator} from '@react-navigation/native-stack';

import bottomHomeNavigator from '../router/bottomHomeNavigator.routes';
import StoryScreen from '../screens/StoryScreen';

const RootStack = createNativeStackNavigator();

const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={'Home'}
      component={bottomHomeNavigator}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="Story"
      component={StoryScreen}
      options={{headerShown: false}}
    />
  </RootStack.Navigator>
);

export default Router;
