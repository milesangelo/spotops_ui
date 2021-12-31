import React from 'react';
import { Animated, Pressable, StyleSheet, Text, TouchableNativeFeedback } from 'react-native';
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Button(props: any) {
    const { onPress, title = 'Submit' } = props;

    return (
        <TouchableHighlight style={{...styles.button}} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:50,
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: 'purple',
        elevation: 5,
    },
    text: {
        margin: 10,
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    }
});