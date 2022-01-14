import { FlatList } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../../Auth/Screens/styles';
import { useAuth } from '../../Auth/Contexts/Auth';

export const SpotListScreen = () => {
  const [spots, setSpots] = useState([]);
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <FlatList data={spots} renderItem={item => <Text>item.name</Text>} />
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};
