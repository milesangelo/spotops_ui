import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SpotFormScreen } from '../../Spots/Screens/SpotFormScreen';

const Stack = createStackNavigator();

export const AppStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name='Welcome to SpotOps' 
				component={SpotFormScreen}
				options={{
					headerStyle: {
					  backgroundColor: '##f7f0f0',
					},
					headerTintColor: '#3b3939',
				  }} />
		</Stack.Navigator>
	);
};