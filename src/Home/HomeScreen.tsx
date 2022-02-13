import React from 'react';
import {View, Text, ScrollView, Dimensions, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors, Sizes } from '../theme';
export const HomeScreen = ({navigation}: any) => {
    return(
        <View style={{
            flex: 1,
            backgroundColor: Colors.lightBlue
        }}>
            <View style={{
                position: 'absolute',
                height: 40,
                top: 50,
                left: 0,
                right: 0,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: Sizes.width * 0.9,
                    paddingVertical: Sizes.padding,
                    paddingHorizontal: Sizes.padding * 2,
                    borderRadius: Sizes.radius,
                    backgroundColor: Colors.primary,

                }}></View>
            </View>

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