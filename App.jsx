/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
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
// import Logo from "./assets/icons/logo.svg";


function Section({children, title}) {
  return (
    <View style={styles.sectionContainer}>
      <Text>
        {title}
      </Text>
    </View>
  );
}

function App() {

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar />
        <View>
            <Text style={styles.title}>My first App!</Text>
            <Task2 />
            <Task3 />
            {/*<Logo width={120} height={40} />*/}
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // height: 1000,
    //   backgroundColor: '#999',
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
});

export default App;
