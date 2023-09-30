import React, {useCallback, useMemo, useRef} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import BottomSheet, {BottomSheetScrollView} from "@gorhom/bottom-sheet";

export const Task13 = () => {
    // hooks
    const sheetRef = useRef(null);

    // variables
    const data = useMemo(
        () =>
            Array(50)
                .fill(0)
                .map((_, index) => `index-${index}`),
        []
    );
    const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);

    // callbacks
    const handleSheetChange = useCallback((index) => {
        console.log("handleSheetChange", index);
    }, []);
    const handleSnapPress = useCallback((index) => {
        sheetRef.current?.snapToIndex(index);
    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
    }, []);

    // render
    const renderItem = useCallback(
        (item) => (
            <View key={item} style={styles.itemContainer}>
                <Text>{item}</Text>
            </View>
        ),
        []
    );
    return (
        <>
            {/*<Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />*/}
            {/*<Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />*/}
            <Button title="13. Open Bottom Sheet" onPress={() => handleSnapPress(0)} />
            {/*<Button title="Close" onPress={() => handleClosePress()} />*/}
            <BottomSheet
                ref={sheetRef}
                index={-1}
                snapPoints={snapPoints}
                onChange={handleSheetChange}
                enablePanDownToClose={true}
            >
                <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
                    {data.map(renderItem)}
                </BottomSheetScrollView>
            </BottomSheet>
        </>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: "white",
    },
    itemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: "#eee",
    },
});