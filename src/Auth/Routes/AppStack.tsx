import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SpotFormScreen} from '../../Spots/Screens/SpotFormScreen';
const Stack = createStackNavigator();

export const AppStack = ({name}: {name: string}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={`Welcome to SpotOps, ${name}`}
        component={SpotFormScreen}
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
