import {Alert, Button, StyleSheet, Text, View} from "react-native";
import Geolocation from '@react-native-community/geolocation';
import React, {useState} from "react";

export default function Task18() {
    const watchPosition = () => {
        try {
            const watchID = Geolocation.watchPosition(
                (position) => {
                    console.log('watchPosition', JSON.stringify(position));
                    setWPosition(JSON.stringify(position));
                },
                (error) => Alert.alert('WatchPosition Error', JSON.stringify(error))
            );
            setSubscriptionId(watchID);
        } catch (error) {
            Alert.alert('WatchPosition Error', JSON.stringify(error));
        }
    };

    const clearWatch = () => {
        subscriptionId !== null && Geolocation.clearWatch(subscriptionId);
        setSubscriptionId(null);
        setWPosition(null);
    };

    const getCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            (pos) => {
                setPosition(pos);
            },
            (error) => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
            { enableHighAccuracy: true }
        );
    };
    const [wposition, setWPosition] = useState(null);
    const [subscriptionId, setSubscriptionId] = useState(null);
    const [position, setPosition] = useState(null);

    return (
        <>
            <Text style={styles.titleStyle}>18. Geolocation</Text>
            <View>
                <Text style={styles.instructions}>Longtitude: {position?.coords?.longitude}</Text>
                <Text style={styles.instructions}>Altitude: {position?.coords?.altitude}</Text>
                <Text style={styles.instructions}>Latitude: {position?.coords?.latitude}</Text>
                <Text style={styles.instructions}>Accuracy: {position?.coords?.accuracy}</Text>
                <Button title="Get Current Position" onPress={getCurrentPosition} />
            </View>

            <Text>Last position: {wposition || 'unknown'}</Text>
            {subscriptionId !== null ? (
                <Button title="Clear Watch" onPress={clearWatch} />
            ) : (
                <Button title="Watch Position" onPress={watchPosition} />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        textAlign: 'center',
    },
    instructions: {
        textAlign: 'left',
        color: '#fff',
    },
});