import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {useAuth} from '../Contexts/Auth';
import {Loading} from '../../Components/Loading';
import { AuthStack } from './AuthStack';

export const Router = () => {
  const {authData, loading} = useAuth();

  if (loading) {
    return <Loading />;
  } else {
    return (
      <NavigationContainer>
        {authData ? <AppStack name={authData.name}/> : <AuthStack/>}
      </NavigationContainer>
    )
  }
};
