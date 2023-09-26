import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export const Task3 = ({navigation}) => {
    return (
            <LinearGradient colors={['#d9d9dc', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Gradient')}
                >
                    <Text style={styles.buttonText}>Go to Gradient Screen</Text>
                </TouchableOpacity>
                {/*<Button style={styles.buttonText} title="Go to Gradient Screen"*/}
                {/*        onPress={() => navigation.navigate('Gradient')}/>*/}
            </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        paddingVertical: 15,
        borderRadius: 25,
        marginTop: 15
    },
    button: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        fontSize: 24,
        textAlign: 'center',
        color: '#ffffff',
    }
});

