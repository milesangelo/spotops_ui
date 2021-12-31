import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import { HomeScreen } from './src/Auth/Screens/HomeScreen';
import { SpotFormScreen } from './src/Spots/Screens/SpotFormScreen';

const Stack = createStackNavigator();

export const AppStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Add a new spot" component={SpotFormScreen} />
		</Stack.Navigator>
	);
};