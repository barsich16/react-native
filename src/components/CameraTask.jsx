// import React, { useEffect, useState } from 'react'
// import {Camera, CameraPermissionStatus, useCameraDevice} from 'react-native-vision-camera'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import {StyleSheet, Text} from 'react-native'
// import PermissionsPage from "./PermissionsPage";
//
//
// export function CameraTask() {
//     const [cameraPermission, setCameraPermission] = useState()
//     const [microphonePermission, setMicrophonePermission] = useState()
//
//     useEffect(() => {
//         Camera.getCameraPermissionStatus().then(setCameraPermission)
//         Camera.getMicrophonePermissionStatus().then(setMicrophonePermission)
//     }, [])
//
//     console.log(`Re-rendering Navigator. Camera: ${cameraPermission} | Microphone: ${microphonePermission}`)
//
//     if (cameraPermission == null || microphonePermission == null) {
//         // still loading
//         return null
//     }
//
//     // const showPermissionsPage = cameraPermission !== 'granted' || microphonePermission === 'not-determined'
//     const device = useCameraDevice('back');
//
//     if (device == null) return <Text>Error</Text>
//     return (
//         <Camera
//             style={styles.root}
//             device={device}
//             isActive={true}
//         />
//     )
//     // return (
//     //         <GestureHandlerRootView style={styles.root}>
//     //             {showPermissionsPage ? <PermissionsPage /> : 'CameraPage'}
//     //         </GestureHandlerRootView>
//     // )
// }
//
// const styles = StyleSheet.create({
//     root: {
//         flex: 1,
//     },
// })