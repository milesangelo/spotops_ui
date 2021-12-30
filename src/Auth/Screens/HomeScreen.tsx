import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from './styles';
import { useAuth } from '../Contexts/Auth';

export const HomeScreen = () => {
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    const getMoviesFromApi = () => {
      return fetch('http://10.0.2.2:5033/WeatherForecast', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((json) => {
          return console.log(json);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    const response = getMoviesFromApi();
    console.log(response);
    console.log('this is the home screen')
  }, []);


  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};