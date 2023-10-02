import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {ScrollView, StyleSheet, Text} from 'react-native';
import DeviceInfo, {useBatteryLevel} from 'react-native-device-info';
import {getManufacturer} from 'react-native-device-info';

const Task16 = (props) => {
    const syncInfo = {
        brand: DeviceInfo.getBrand(),
        model: DeviceInfo.getModel(),
        //hooks
        batteryLevel: useBatteryLevel(),
        //sync
        isCameraPresent: DeviceInfo.isCameraPresentSync(),
        firstInstallTime:DeviceInfo.getFirstInstallTimeSync(),
    }
    const [asyncDeviceInfo, setAsyncDeviceInfo] = useState(syncInfo);

    useEffect(() => {
        getDataAsync();
    }, []);

    const getDataAsync = async () => {
        let deviceJSON = {};
        try {
            deviceJSON.deviceName = await DeviceInfo.getDeviceName();
            deviceJSON.IpAddress = await DeviceInfo.getIpAddress();
            deviceJSON.batteryLevel = await DeviceInfo.getBatteryLevel();
            deviceJSON.isBatteryCharging = await DeviceInfo.isBatteryCharging();
        } catch (e) {
            console.log('Trouble getting device info ', e);
        }
        // eslint-disable-next-line react/no-did-mount-set-state
        setAsyncDeviceInfo(prev => ({...prev, ...deviceJSON}));
    };

    return (
        <>
            <Text style={styles.titleStyle}>16. Device info</Text>
            <ScrollView>
                <Text style={styles.instructions}>
                    {JSON.stringify(asyncDeviceInfo, null, '  ')}
                </Text>
            </ScrollView>
        </>
    );
};
export default Task16;

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        textAlign: 'center',
        // margin: 10,
    },
    instructions: {
        textAlign: 'left',
        color: '#fff',
        // margin: 5,
    },
});