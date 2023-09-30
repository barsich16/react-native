import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import EncryptedStorage from "react-native-encrypted-storage";

// mock server functions
const verifyUserCredentials = async payload => {
    // make an HTTP request to the server and verify user credentials
    return {userId: '123456'};
};

const sendPublicKeyToServer = publicKey => {
    // make an HTTP request to the server and save the `publicKey` on the user's entity
    console.log({publicKey});
};

const onTouchIdPress = async () => {
    const rnBiometrics = new ReactNativeBiometrics();
    const {available, biometryType} = await rnBiometrics.isSensorAvailable();

    if (!available || biometryType !== BiometryTypes.Biometrics) {
        Alert.alert(
            'Oops!',
            'Touch ID is not available on this device.',
        );
        return;
    }

    const userId = await EncryptedStorage.getItem('userId');
    if (!userId) {
        Alert.alert(
            'Oops!',
            'You have to sign in using your credentials first to enable Touch ID.',
        );
        return;
    }

    const timestamp = Math.round(new Date().getTime() / 1000).toString();
    const payload = `${userId}__${timestamp}`;

    const {success, signature} = await rnBiometrics.createSignature(
        {
            promptMessage: 'Touch your finger',
            payload,
        },
    );
    if (!success) {
        Alert.alert(
            'Oops!',
            'Something went wrong during authentication with Face ID. Please try again.',
        );
        return;
    }

    const {status, message} = await verifySignatureWithServer({
        signature,
        payload,
    });
    if (status !== 'success') {
        Alert.alert('Oops!', message);
        return;
    }

    Alert.alert('Success!', 'You are successfully authenticated!');
}

const verifySignatureWithServer = async ({signature, payload}) => {
    // make an HTTP request to the server and verify the signature with the public key.
    return {status: 'success'};
};


export default function Task11() {
    return (
        // <View style={styles.container}>
        //     <TouchableOpacity
        //         onPress={async () => {
        //             const {userId} = await verifyUserCredentials('form credentials');
        //             const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });
        //
        //             const checkBiometricAvailable = await rnBiometrics.isSensorAvailable();
        //
        //             if (checkBiometricAvailable.available && checkBiometricAvailable.biometryType === BiometryTypes.Biometrics) {
        //                 Alert.alert(
        //                     'Touch ID',
        //                     'Would you like to enable Touch ID authentication for the next time?',
        //                     [
        //                         {
        //                             text: 'Yes please',
        //                             onPress: async () => {
        //                                 const {publicKey} = await rnBiometrics.createKeys();
        //                                 await sendPublicKeyToServer(publicKey);
        //
        //                                 await EncryptedStorage.setItem('userId', userId);
        //                             },
        //                         },
        //                         {text: 'Cancel', style: 'cancel'},
        //                     ],
        //                 );
        //             }
        //         }}>
        //         <View style={styles.btn}>
        //             <Text style={styles.btnText}>Sign in</Text>
        //         </View>
        //     </TouchableOpacity>

            <TouchableOpacity
                onPress={onTouchIdPress} style={styles.btnSecondary}>
                    <Text style={styles.btnSecondaryText}>11. Touch ID</Text>
            </TouchableOpacity>
        // </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: '#000',
        borderColor: '#000',
    },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#fff',
    },
    btnSecondary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: '#e8ecf4',
        borderColor: '#000',
    },
    btnSecondaryText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#000',
    },
});