import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import React from "react";
import MaskedView from "@react-native-masked-view/masked-view";

export const MaskedScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <MaskedView
                style={{ flex: 1, flexDirection: 'row', height: '100%' }}
                maskElement={
                    <View
                        style={{
                            backgroundColor: 'transparent',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 60,
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        >
                            Basic Mask
                        </Text>
                    </View>
                }
            >
                <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
                <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
                <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
            </MaskedView>
        </SafeAreaView>
    );
}