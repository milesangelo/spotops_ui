import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import {AuthData, authService} from '../Services/AuthService';
import {statusCodes} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

import globals from '../../globals.json';
import { Alert } from 'react-native';

type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn({ email, password }: { email: string; password: string }): Promise<boolean>;
  signOut(): void;
};

const storeJwt = async (value: any) => {
  await AsyncStorage.setItem(globals.JwtStorageKey, value)
    .catch(reason => Alert.alert(reason));
};

const removeJwt = async () => {
  await AsyncStorage.removeItem(globals.JwtStorageKey)
    .catch(reason => Alert.alert(reason));
}

//Create the Auth Context with the data type specified
//and a empty object
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }: { children?: ReactNode }) => {
  const [authData, setAuthData] = useState<AuthData>();

  //the AuthContext start with loading equals true
  //and stay like this, until the data be load from Async Storage
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    isSignedIn();

    return function cleanup() {
      //GoogleSignin.signOut();
    };
  }, []);

  async function isSignedIn(): Promise<void> {
    // We want to check asyncstorage for a jwt &
    // make an api call to the user/user endpoint
    // to find out whether or not the jwt is still
    // valid or not.
  }

  /**
   *  Sets authdata if signin request is authorized,
   *  
   */
  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await authService.signIn({ email, password });
      const authResponse = JSON.parse(response);
      if (authResponse?.isAuthenticated) {
        await storeJwt(authResponse.token);
        console.log(authResponse.token);
        setAuthData({
          email: authResponse.email,
          name: authResponse.name,
          token: authResponse.token,
        });
        setLoading(false);
        return true;
      } else {
        Alert.alert(authResponse.message)
        return false;
      }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.warn('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.warn('Signin in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.warn('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        console.warn(error);
      }
      return false;
    }
  };

  /**
   *
   */
  const signOut = async () => {
    try {
      await removeJwt();
      setAuthData(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthContext, AuthProvider, useAuth };
