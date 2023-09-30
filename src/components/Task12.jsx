import React from 'react';
import {useCameraPermission} from "react-native-vision-camera";
import {View} from "react-native";

export const Task12 = () => {
    const { hasPermission, requestPermission } = useCameraPermission();
    return (<View/>


    )
}

