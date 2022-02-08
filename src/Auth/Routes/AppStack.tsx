import React, {useCallback, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SpotFormScreen} from '../../Spots/Screens/SpotFormScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const JwtStorageKey = '@jwt';

export const AppStack = ({name}: {name: string}) => {
  // declare the async data fetching function
  const fetchData = useCallback(async () => {
    var token = await AsyncStorage.getItem(JwtStorageKey);
    console.log('using ' + token + ' for api/secured http get.');

    const response = await fetch('http://10.0.2.2:6001/api/secured', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
    
    const data = await response.text();
    //const data = await response.json()
    if (response.ok) {
      if (data) {
        console.log(`signin response data: ${data}`)
        return Promise.resolve(data);
      } else {
        return Promise.reject('error in data')
      }
    } else {
      return Promise.reject(response.status.toString())
    }



    // const response = await fetch('http://0.0.0.0:6001/api/secured', {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': 'Bearer ' + token,
    //     'Content-Type': 'application/json'
    //   },
    // }).catch(err => console.log('the error is ' + err));

    // const data = await response.text();
    // if (response.ok) {
    //   return data;
    // } else {
    //   console.log('response status ' + response.status)
    // }
  }, []);

  // the useEffect is only there to call `fetchData` at the right time
  useEffect(() => {
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [fetchData]);

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
