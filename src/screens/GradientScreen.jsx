import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

export const GradientScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <LinearGradient colors={['#d9d9dc', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <View style={styles.view}>
                    <Text style={styles.text}>Screen with gradient background!</Text>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        fontFamily: 'Poppins',
        alignItems: 'center',
        justifyContent: 'center'
    },
    linearGradient: {
        flex: 1,
    },
    text: {
        fontSize: 25,
        fontWeight: '600',
        color: '#f6f6f6'
    }
});