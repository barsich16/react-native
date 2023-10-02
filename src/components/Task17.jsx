import NetInfo, {useNetInfo} from "@react-native-community/netinfo";
import {Button, ScrollView, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";

export const Task17 = () => {
    // const netInfo = useNetInfo();
    const [netInfo, setNetInfo] = useState('');
    useEffect(() => {
        // Subscribe to network state updates
        const unsubscribe = NetInfo.addEventListener((state) => {
            setNetInfo(
                `Connection type: ${state.type}\nIs connected?: ${state.isConnected}\nIP Address: ${state.details.ipAddress}`,
            );
        });

        return () => {
            // Unsubscribe to network state updates
            unsubscribe();
        };
    }, []);

    const getNetInfo = () => {
        // To get the network state once
        NetInfo.fetch().then((state) => {
            alert(
                `Connection type: ${state.type}\nIs connected?: ${state.isConnected}\nIP Address: ${state.details.ipAddress}`,
            );
        });
    };

    return (
        <>
            <Text style={styles.titleStyle}>17. Network info</Text>
            <View>
                <Text style={styles.instructions}>{netInfo}</Text>
                <Button
                    title="Get more detailed NetInfo"
                    onPress={getNetInfo}
                />
                {/*<Text style={styles.instructions}>Is Connected? {netInfo.isConnected?.toString()}</Text>*/}
                {/*<Text style={styles.instructions}>*/}
                {/*    {JSON.stringify(netInfo, null, '  ')}*/}
                {/*</Text>*/}
            </View>

        </>
    );
};

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