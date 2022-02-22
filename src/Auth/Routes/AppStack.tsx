import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from '../../Map/MapScreen';

const Stack = createStackNavigator();

function capitalizeFirstLetter(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export const AppStack = ({name}: {name: string}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={`Welcome to SpotOps, ${capitalizeFirstLetter(name)}!`}
        component={MapScreen}
        options={{
          headerStyle: {
            backgroundColor: '##f7f0f0',
          },
          headerTintColor: '#3b3939',
        }}
      />
    </Stack.Navigator>
  );
};
