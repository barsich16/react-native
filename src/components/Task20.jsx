import {useCopilot, CopilotStep, walkthroughable,} from "react-native-copilot";
import {useEffect, useState} from "react";
import {SafeAreaView, Switch, Text, View, Image, TouchableOpacity, StyleSheet} from "react-native";

const WalkthroughableText = walkthroughable(Text);
const WalkthroughableImage = walkthroughable(Image);

export function Task20() {
    const { start, copilotEvents } = useCopilot();
    const [secondStepActive, setSecondStepActive] = useState(true);
    const [lastEvent, setLastEvent] = useState(null);

    useEffect(() => {
        copilotEvents.on("stepChange", (step) => {
            setLastEvent(`stepChange: ${step.name}`);
        });
        copilotEvents.on("start", () => {
            setLastEvent(`start`);
        });
        copilotEvents.on("stop", () => {
            setLastEvent(`stop`);
        });
    }, [copilotEvents]);

    return (
        <SafeAreaView style={styles.container}>
            <CopilotStep
                text="Hey! This is the first step of the tour!"
                order={1}
                name="openApp"
            >
                <WalkthroughableText style={styles.title}>
                    {'Welcome to the demo of\n"React Native Copilot"'}
                </WalkthroughableText>
            </CopilotStep>
            <View style={styles.middleView}>
                <CopilotStep
                    active={secondStepActive}
                    text="Here goes your profile picture!"
                    order={2}
                    name="secondText"
                >
                    <WalkthroughableImage
                        source={{
                            uri: "https://pbs.twimg.com/profile_images/527584017189982208/l3wwN-l-_400x400.jpeg",
                        }}
                        style={styles.profilePhoto}
                    />
                </CopilotStep>
                <View style={styles.activeSwitchContainer}>
                    <Text style={styles.text}>Profile photo step activated?</Text>
                    <View style={{ flexGrow: 1 }} />
                    <Switch
                        onValueChange={(secondStepActive) =>
                            setSecondStepActive(secondStepActive)
                        }
                        value={secondStepActive}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => start()}>
                    <Text style={styles.buttonText}>START THE TUTORIAL!</Text>
                </TouchableOpacity>
                <View style={styles.eventContainer}>
                    <Text style={styles.text}>{lastEvent && `Last event: ${lastEvent}`}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <CopilotStep
                    text="Here is an item in the footer of the screen."
                    order={3}
                    name="thirdText"
                >
                    <WalkthroughableText style={styles.tabItem}>
                        <Text style={styles.text}>Text in the footer</Text>
                    </WalkthroughableText>
                </CopilotStep>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        color: 'black',
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        color: 'black'
    },
    profilePhoto: {
        width: 140,
        height: 140,
        borderRadius: 70,
        marginVertical: 20,
    },
    middleView: {
        flex: 1,
        alignItems: "center",
    },
    button: {
        backgroundColor: "#2980b9",
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    tabItem: {
        flex: 1,
        textAlign: "center",
    },
    activeSwitchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        alignItems: "center",
        paddingHorizontal: 25,
    },
    eventContainer: {
        marginTop: 20,
    },
    text: {
        color: 'black'
    }
});