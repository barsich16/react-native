import React from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import {Task2} from "./src/components/Task2";
import {Task3} from "./src/components/Task3";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {GradientScreen} from "./src/screens/GradientScreen";
import {NavigationScreen} from "./src/screens/NavigationScreen";

function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.safeArea}>
          <StatusBar/>
          <View>
            <Text style={styles.title}>My first App!</Text>
            <Task2/>
            <Task3 navigation={navigation}/>
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                      navigation.navigate('Navigation', {
                          itemId: 86,
                      });
                  }}
              >
                  <Text style={styles.buttonText}>Go to Navigation</Text>
              </TouchableOpacity>
          </View>
        </SafeAreaView>
    );
}

const Stack = createNativeStackNavigator();

function App() {

    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
            <Stack.Screen name="Gradient" component={GradientScreen} />
            <Stack.Screen name="Navigation" component={NavigationScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'Poppins',
    },
    button: {
        paddingVertical: 15,
        borderRadius: 25,
        backgroundColor: '#1f39a2',
        marginTop: 15
    },
    buttonText: {
        fontSize: 24,
        textAlign: 'center',
        color: '#ffffff',
    }
});

export default App;
