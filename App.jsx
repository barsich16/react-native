import Config from "react-native-config";

import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Task2} from "./src/components/Task2";
import {Task3} from "./src/components/Task3";
import SplashScreen from "react-native-splash-screen";
import FlashMessage from "react-native-flash-message";
import {Task9} from "./src/components/Task9";
import {Task10} from "./src/components/Task10";
import Task11 from "./src/components/Task11";
// import {Camera} from "react-native-vision-camera";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import CameraPermissionScreen from "./src/components/PermissionsPage";
import {Task13} from "./src/components/Task13";

function App() {
  // const [cameraPermission, setCameraPermission] = useState(null);
  // const [microphonePermission, setMicrophonePermission] = useState(null);
  //
  // useEffect(() => {
  //   Camera.getCameraPermissionStatus().then(setCameraPermission)
  //   Camera.getMicrophonePermissionStatus().then(setMicrophonePermission)
  // }, [])
  //
  // console.log(`Re-rendering Navigator. Camera: ${cameraPermission} | Microphone: ${microphonePermission}`)
  //
  // if (cameraPermission == null || microphonePermission == null) {
  //   // still loading
  //   return null
  // }
  //
  // const showPermissionsPage = cameraPermission !== 'granted' || microphonePermission === 'not-determined';

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={styles.safeArea}>
      <GestureHandlerRootView style={{ flex: 1 }}>

        <StatusBar />
        <ScrollView>
          <View style={{paddingHorizontal: 10, gap: 15}}>
            <Text style={styles.title}>My first App!</Text>
            <Task2 />
            <Task3 />
            <Text style={styles.task7}>7. Value from .env file: {Config.API_URL}</Text>
            <Task9 />
            <Task10 />
            <Task11 />
            <CameraPermissionScreen />
            <Task13 />
          </View>
        </ScrollView>

        <FlashMessage position="top" />
      </GestureHandlerRootView>
      {/*  {}*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  task7: {
    paddingVertical: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    fontSize: 18,
    color: 'black',
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});

export default App;
