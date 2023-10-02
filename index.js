
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GradientScreen} from "./src/screens/GradientScreen";
import {MaskedScreen} from "./src/screens/MaskedScreen";
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Killed state notif', remoteMessage);
})

AppRegistry.registerComponent(appName, () => App);
