import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

let styles = StyleSheet.create({
    linearGradient: {
        // flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        // backgroundColor: 'red',
    },
});

export const Task3 = () => {
    return (
        // <View>
            <LinearGradient colors={['#d9d9dc', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                    Sign in with Facebook and other
                </Text>
            </LinearGradient>
        // </View>

    )
}

