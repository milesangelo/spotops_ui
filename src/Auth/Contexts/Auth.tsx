import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import {AuthData, authService, UserInfo} from '../Services/AuthService';
import {
  GoogleSignin,
  statusCodes,
  User,
} from '@react-native-google-signin/google-signin';

type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
};

//Create the Auth Context with the data type specified
//and a empty object
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}: {children?: ReactNode}) => {
  const [authData, setAuthData] = useState<AuthData>();

  //the AuthContext start with loading equals true
  //and stay like this, until the data be load from Async Storage
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorage function.
    configureGoogleSignIn();

    return function cleanup() {
      GoogleSignin.signOut();
    };
  }, []);

  async function configureGoogleSignIn(): Promise<void> {
    GoogleSignin.configure({
      scopes: ['email', 'profile'], // what API you want to access on behalf of the user, default is email and profile
      iosClientId:
        '390366308918-gepf9o1b6joc3ea28u7hdee8itbb3qns.apps.googleusercontent.com',
      webClientId:
        '390366308918-151s654fhgloaol55ljnkid5uqfs05tg.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });

    if (await GoogleSignin.isSignedIn()) {
      await GoogleSignin.signOut();
    }

    await GoogleSignin.getCurrentUser().then((userInfo: User | null) => {});
    setLoading(false);
  }

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn()
        .then((value: User) =>
          authService.register(
            value.user.email,
            value.user.givenName,
            value.user.familyName,
            value.user.email,
            'P@ssword1',
          ),
        )
        .then((response: UserInfo) => {
          console.log(response);
          const authData: AuthData = {
            email: response.email,
            name: response.firstname || '',
            token: '',
          };
          setAuthData(authData);
        });
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.warn('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.warn('Signin in progress');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.warn('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
        console.warn(error);
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut()
        .then
        //authService.signOut()
        ();
      setAuthData(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
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

export {AuthContext, AuthProvider, useAuth};
