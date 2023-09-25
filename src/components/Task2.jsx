import React from 'react';
import Logo from '../../assets/icons/logo.svg';
import Logo2 from '../../assets/icons/react.svg';
import {StyleSheet, View} from "react-native";

export const Task2 = () => {
    return (
        <View style={styles.view}>
            <Logo width={90} height={100} />
            <Logo2 width={90} height={100} fill={'blue'} />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});