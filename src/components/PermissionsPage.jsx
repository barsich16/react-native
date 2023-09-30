import React, { useEffect, useState } from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native'
import { check, request, RESULTS, PERMISSIONS } from 'react-native-permissions'

const CameraPermissionScreen = () => {
    const [cameraPermission, setCameraPermission] = useState(null)

    const requestCameraPermission = async () => {
        try {
            const result = await request(PERMISSIONS.ANDROID.CAMERA)
            setCameraPermission(result)
        } catch (error) {
            console.log('Error requesting camera permission: ', error)
        }
    }

    const checkCameraPermission = async () => {
        try {
            const result = await check(PERMISSIONS.ANDROID.CAMERA)
            setCameraPermission(result)
        } catch (error) {
            console.log('Error checking camera permission: ', error)
        }
    }

    useEffect(() => {
        checkCameraPermission();
    }, [])

    const handleGrantPermission = () => {
        requestCameraPermission();
    }

    const handleDenyPermission = () => {
        setCameraPermission(RESULTS.DENIED)
    }

    return (
        <View>
            {cameraPermission === RESULTS.UNAVAILABLE && (
                <Text>Camera permission is not available on this device.</Text>
            )}
            {cameraPermission === RESULTS.DENIED && (
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={styles.button} onPress={handleGrantPermission}>
                        <Text style={styles.text}>12. Grant Permission</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleDenyPermission}>
                        <Text style={styles.text}>Deny Permission</Text>
                    </TouchableOpacity>
                    {/*<TouchableOpacity title="Deny Permission" onPress={handleDenyPermission} />*/}
                </View>
            )}
            {cameraPermission === RESULTS.GRANTED && (
                <Text>12. Camera permission has been granted.</Text>
            )}
            {cameraPermission === RESULTS.BLOCKED && (
                <Text>Camera permission is blocked. Go to settings to unblock it.</Text>
            )}
        </View>
    )
}

let styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        backgroundColor: '#e8ecf4',
        borderRadius: 8,
        width: '100%',
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
    },
});

export default CameraPermissionScreen