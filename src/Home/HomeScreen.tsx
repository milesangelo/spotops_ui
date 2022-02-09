import React from 'react';
import {View, Text, ScrollView, Dimensions, StyleSheet} from 'react-native';
//import MapView, {Marker} from 'react-native-maps';

export const HomeScreen = ({navigation}: any) => {
    return(
        <View>
            <View style={styles.smallBlock}></View>
            <View style={styles.mediumBlock}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    smallBlock: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    },
    mediumBlock: {
        width: 200,
        height: 200,
        backgroundColor: 'red'
    }
})