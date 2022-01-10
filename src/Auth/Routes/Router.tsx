import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {useAuth} from '../Contexts/Auth';
import {Loading} from '../Components/Loading';

export const Router = () => {
  const {authData, loading} = useAuth();

  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};