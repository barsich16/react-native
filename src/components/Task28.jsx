import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Task28 = () => {
        return (
            <View style={styles.column}>
                <Text style={styles.header}>28. Text with Extended StyleSheet!</Text>
            </View>
        );
}

const styles = EStyleSheet.create({
    header: {
        fontSize: '1.2rem',
        textAlign: 'center',
    },
    column: {
        width: '90%',
        marginHorizontal: 'auto',
        backgroundColor: '$baseColor',
    }
});