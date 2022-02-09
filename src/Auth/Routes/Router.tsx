import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
//import {AuthStack} from './AuthStack';
import {useAuth} from '../Contexts/Auth';
import {Loading} from '../Components/Loading';
import { HomeScreen } from '../../Home/HomeScreen';
import { AuthStack } from './AuthStack';
import MapScreen from '../../Map/MapScreen';

export const Router = () => {
  const {authData, loading} = useAuth();

  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {authData ? <AppStack name={authData.name} /> : <MapScreen />}
    </NavigationContainer>
  );
};
