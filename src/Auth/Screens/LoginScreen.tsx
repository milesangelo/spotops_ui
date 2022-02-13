import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAuth} from '../Contexts/Auth';

import {styles} from '../../styles';
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
