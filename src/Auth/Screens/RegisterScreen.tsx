import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { authService } from '../Services/AuthService';
import { Loading } from '../Components/Loading';
import { useAuth } from '../Contexts/Auth';

//export type AuthStackParamList = {
//   RegisterScreen: undefined;
//   Login: undefined;
// };

// export interface IAuthStackScreenProps {
//   navigation: NativeStackNavigationProp<AuthStackParamList, 'RegisterScreen'>;
// }

export const RegisterScreen = ({ navigation }: any) => {
  const [registering, setRegistering] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();

  const register = async () => {
    setRegistering(true);
    console.log(`${firstname}, ${email}, ${password}`);
    await auth.register({ firstname, lastname, email, password })
      .then(success => {
        setRegistering(false);
        if (success) {     
          Alert.alert('Successful registration!');
          navigation.navigate('Login');
        }
      })
  };

  function renderRegister() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>SpotOps</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            value={firstname}
            placeholder="First name..."
            placeholderTextColor="#CEE6EF"
            onChangeText={text => {
              setFirstname(text);
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            defaultValue={lastname}
            placeholder="Last name..."
            placeholderTextColor="#CEE6EF"
            onChangeText={text => {
              setLastname(text);
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            defaultValue={email}
            placeholder="Email..."
            placeholderTextColor="#CEE6EF"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#CEE6EF"
            onChangeText={text => {
              setPassword(text);
            }}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => register()}>
          <Text style={styles.loginText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    )
  }

  if (registering) {
    return <Loading />;
  } else {
    return (renderRegister());
  }
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEE6EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 70,
    color: '#3A3257',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#738FB2',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: '#517AA3',
    fontSize: 12,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#517AA3',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: '#CEE6EF',
  },
  signupText: {
    color: '#517AA3',
  },
});
