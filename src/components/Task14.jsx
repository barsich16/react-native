import React from 'react';
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';
import {Button, Text, TouchableOpacity, StyleSheet, View} from "react-native";

export const Task14 = () => {
    const translateX = useSharedValue(0);

    const handlePress = () => {
        translateX.value += 10;
    };

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: withSpring(translateX.value * 5) }],
    }));

    return (
        <>
            <View style={{alignItems: 'center'}}>
                <Animated.View style={[styles.box, animatedStyles]} />
            </View>
            <Button onPress={handlePress} title={'Click me'}/>
            {/*    <Text>Click me</Text>*/}
            {/*</Button>*/}
        </>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 120,
        width: 120,
        backgroundColor: '#b58df1',
        borderRadius: 20,
        marginVertical: 15,
    },
});

