import React, {useCallback, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from '../../Home/HomeScreen';
import MapScreen from '../../Map/MapScreen';


const Stack = createStackNavigator();

export const AppStack = ({name}: {name: string}) => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={`Welcome to SpotOps, ${name}`}
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
