import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import Realm from "realm";
import { AuthData, authService } from '../Services/AuthService';
import {
    GoogleSignin,
    statusCodes,
    User,
} from '@react-native-google-signin/google-signin';

type AuthContextData = {
    authData?: User;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
};

const AuthSchema = {
    name: "@AuthData",
    properties: {
        _id: "int",
        token: "string",
        email: "string",
        name: "string"
    },
    primaryKey: "_id"
}

let realm = new Realm({schema: [AuthSchema], schemaVersion: 1})

//Create the Auth Context with the data type specified
//and a empty object
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }: { children?: ReactNode }) => {
    const [authData, setAuthData] = useState<User>();
    
    //the AuthContext start with loading equals true
    //and stay like this, until the data be load from Async Storage
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //Every time the App is opened, this provider is rendered
        //and call de loadStorage function.
        loadStorageData();
    }, []);

    async function loadStorageData(): Promise<void> {

        GoogleSignin.configure({
            scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
            iosClientId:
                '390366308918-gepf9o1b6joc3ea28u7hdee8itbb3qns.apps.googleusercontent.com',
            webClientId:
                '390366308918-151s654fhgloaol55ljnkid5uqfs05tg.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            
        });

        await GoogleSignin.getCurrentUser()
            .then((authData : User | null) => {
                if (authData) {
                    setAuthData(authData);
                }
            });

        setLoading(false);
        // try {
         
        //     realm.write(() => {
        //         //Try get the data from Async Storage
        //         //const authDataSerialized = "User") //.getItem('@AuthData');
        //         const authDataSerialized : any = realm.objectForPrimaryKey('@AuthData', 1);

        //         if (authDataSerialized) {
        //             //If there are data, it's converted to an Object and the state is updated.
        //             //const _authData: AuthData = JSON.parse(authDataSerialized);
        //             console.log(authDataSerialized);
        //             const authData : any = {
        //                 name : authDataSerialized.name,
        //                 email: authDataSerialized.email,
        //                 token: authDataSerialized.token
        //             }
        //             console.log(authData);
        //             setAuthData(undefined);
        //         }
        //     })
        // } catch (error) {
        // } finally {
        //     //loading finished
        //     setLoading(false);
        // }
    }

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            await GoogleSignin.signIn()
                .then((value: User) => {
                    setAuthData(value)
                    console.log(value);
                })
        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                console.warn('Cancel');
              } else if (error.code === statusCodes.IN_PROGRESS) {
                console.warn('Signin in progress');
                // operation (f.e. sign in) is in progress already
              } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.warn('PLAY_SERVICES_NOT_AVAILABLE');
                // play services not available or outdated
              } else {
                // some other error happened
                console.warn(error);
              }
        }



        //call the service passing credential (email and password).
        //In a real App this data will be provided by the user from some InputText components.
        // const authData = await authService.signIn(
        //     'lucasgarcez@email.com',
        //     '123456',
        // );

        //Set the data in the context, so the App can be notified
        //and send the user to the AuthStack
        //setAuthData(authData);

        // try {
        //     //Persist the data in the Async Storage
        //     //to be recovered in the next user session.
        //     realm.write(() => {
        //         realm.create('@AuthData', {
        //             _id: 1,
        //             token: authData.token,
        //             email: authData.email,
        //             name: authData.name
        //         });
        //     });

        //     const data = realm.objectForPrimaryKey('@AuthData', 1);
        //     console.log(data);

        // } catch (error) {
        // } finally { }
    };

    const signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setAuthData(undefined);
          } catch (error) {
            console.error(error);
          }
        // //Remove data from context, so the App can be notified
        // //and send the user to the AuthStack
        // setAuthData(undefined);
    
        // //Persist the data in the Async Storage
        // //to be recovered in the next user session.
        // (await realm).write(() => {
        //     const authData = realm.objectForPrimaryKey('@AuthData', 1);
        //     console.log(authData);
        //     realm.delete(authData);
        // });
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