/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


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
    <SafeAreaView>
      <StatusBar
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
            <Text style={styles.title}>My first App!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
