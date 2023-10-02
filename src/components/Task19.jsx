import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export const Task19 = () => {
    return <WebView source={{ uri: 'https://reactnative.dev/' }}  />;
}