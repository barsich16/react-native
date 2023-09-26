import {Button, SafeAreaView, StyleSheet, Text, View} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

export const NavigationScreen = ({ route, navigation }) => {
    const { itemId } = route.params;

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 5}}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Navigation Screen</Text>
            <Text style={{fontSize: 18}}>itemId: {JSON.stringify(itemId)}</Text>
            <Button
                title="Go to Navigation again"
                onPress={() =>
                    navigation.push('Navigation', {
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />

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