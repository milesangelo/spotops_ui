import { TouchableHighlight } from 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text } from 'react-native';


export default function Button(props: any) {
    const { onPress, title = 'Submit', disable = false } = props;

    return (
        <TouchableHighlight style={{...buttonStyles.button}} onPress={onPress} disabled={disable}>
            <Text style={buttonStyles.text}>{title}</Text>
        </TouchableHighlight>
    )
}

const buttonStyles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:50,
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#5916cc',
        elevation: 5,
    },
    text: {
        margin: 4,
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    }
});