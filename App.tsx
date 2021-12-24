/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>SpotOps</Text>
      <Button title="start shredding" onPress={() => {Linking.openURL('https://google.com')}}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.white,
    fontSize: 40,
    fontStyle: 'italic',
    margin: 15
  }
})

export default App;
