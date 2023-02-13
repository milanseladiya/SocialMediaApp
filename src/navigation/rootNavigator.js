import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {routes} from './routes';
/* Screens */
import LoginScreen from '../screens/loginScreen';
import SignUpScreen from '../screens/signUpScreen';
import HomeScreen from '../screens/homeScreen';
import AddPostScreen from '../screens/addPostScreen';
import ChatsListScreen from '../screens/chatsListScreen';
import ChatScreen from '../screens/chatScreen';
import CommentsScreen from '../screens/commentsScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={routes.SignUpScreen} component={SignUpScreen} />
      <Stack.Screen name={routes.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={routes.AddPostScreen} component={AddPostScreen} />
      <Stack.Screen name={routes.ChatsListScreen} component={ChatsListScreen} />
      <Stack.Screen name={routes.ChatScreen} component={ChatScreen} />
      <Stack.Screen name={routes.CommentsScreen} component={CommentsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
