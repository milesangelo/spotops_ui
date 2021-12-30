import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen} from '../Screens/SignInScreen';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In Screen" component={SignInScreen} />
    </Stack.Navigator>
  );
};