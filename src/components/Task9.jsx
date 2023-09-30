import React from 'react';
import {Button} from "react-native";
import { showMessage, hideMessage } from "react-native-flash-message";

export const Task9 = () => {
    return (
        <Button
            onPress={() => {
                showMessage({
                    message: "Task 9 successfully completed",
                    type: "success",
                });
            }}
            title="9. Show flash message"
            color="#841584"
        />

    )
}

