import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAuth} from '../Contexts/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {TextInput} from 'react-native-gesture-handler';

export const LoginScreen = ({navigation}: any) => {
  const [loading, isLoading] = useState(false);

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const auth = useAuth();

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    isLoading(true);
    console.log(email);
    await auth.signIn({email, password});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SpotOps</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#CEE6EF"
          onChangeText={text =>
            setLoginInfo(prevState => ({
              email: text,
              password: prevState.password,
            }))
          }
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#CEE6EF"
          onChangeText={text => {
            setLoginInfo(prevState => ({
              email: prevState.email,
              password: text,
            }));
          }}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => signIn(loginInfo)}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
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
