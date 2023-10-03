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
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Task13} from "./src/components/Task13";
import {Task14} from "./src/components/Task14";
import Task16 from "./src/components/Task16";
import {Task17} from "./src/components/Task17";
import Task18 from "./src/components/Task18";
import {Task19} from "./src/components/Task19";
import {Task20} from "./src/components/Task20";
import {CopilotProvider} from "react-native-copilot";
import Task21 from "./src/components/Task21";
import Task22 from "./src/components/Task22";
import {Task222} from "./src/components/Task222";
import usePushNotification from "./src/hooks/usePushNotification";
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import Task24 from "./src/components/Task24";
import {Task25} from "./src/components/Task25";
import Task26 from "./src/components/Task26";
import Task27 from "./src/components/Task27";
import EStyleSheet from "react-native-extended-stylesheet";
import {Task28} from "./src/components/Task28";
import store from "./src/redux/store";
import {Provider} from "react-redux";
import {ReduxExample} from "./src/components/ReduxExample";
import {Instagram} from "./src/components/Instagram/Instagram";
// import {CameraTask} from "./src/components/CameraTask";

EStyleSheet.build({
  $baseColor: 'green',
});


function App() {
    // const {
  //   requestUserPermission,
  //   getFCMToken,
  //   listenToBackgroundNotifications,
  //   listenToForegroundNotifications,
  //   onNotificationOpenedAppFromBackground,
  //   onNotificationOpenedAppFromQuit,
  // } = usePushNotification();
  //
  // useEffect(() => {
  //   const listenToNotifications = () => {
  //     try {
  //       getFCMToken();
  //       requestUserPermission();
  //       onNotificationOpenedAppFromQuit();
  //       listenToBackgroundNotifications();
  //       listenToForegroundNotifications();
  //       onNotificationOpenedAppFromBackground();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //
  //   listenToNotifications();
  // }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
      <Instagram />
      // <Provider store={store}>
      //   <SafeAreaView style={styles.safeArea}>
      //     <GestureHandlerRootView style={{ flex: 1 }}>
      //       <StatusBar />
      //       <ReduxExample />
      //       <ScrollView>
      //         <View style={{paddingHorizontal: 10, gap: 15, justifyContent: 'center'}}>
      //           <Text style={styles.title}>My first App!</Text>
      //           <Task2 />
      //           <Task3 />
      //           <Text style={styles.task7}>7. Value from .env file: {Config.API_URL}</Text>
      //           <Task9 />
      //           <Task10 />
      //           <Task11 />
      //           {/*<CameraPermissionScreen />*/}
      //           <Task13 />
      //           <Task14 />
      //           <Task16 />
      //           <Task17 />
      //           <Task18 />
      //           {/*<Task19/>   different screens*/}
      //           {/*<CopilotProvider stopOnOutsideClick androidStatusBarVisible tooltipStyle={{ backgroundColor: "#9FA8DA" }} >*/}
      //           {/*  <Task20 />*/}
      //           {/*</CopilotProvider>*/}
      //           <Task21 />
      //           <Task222 />
      //           <Task25 />
      //           <Task26 />
      //           <Task27 />
      //           <Task28 />
      //         </View>
      //       </ScrollView>
      //       <Task24 />
      //
      //       <FlashMessage position="top" />
      //     </GestureHandlerRootView>
      //   </SafeAreaView>
      // </Provider>
      // <Task24 />

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
