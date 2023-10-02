import notifee from '@notifee/react-native';
import {Button, View} from "react-native";

export function Task222() {
    async function onDisplayNotification() {
        await notifee.requestPermission()

        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
        });

        await notifee.displayNotification({
            title: 'Notification Title',
            body: 'Main body content of the notification',
            android: {
                channelId,
                // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
                // pressAction is needed if you want the notification to open the app when pressed
                pressAction: {
                    id: 'default',
                },
            },
        });
    }
    return (
        <View>
            <Button title="Display Notification" onPress={() => onDisplayNotification()} />
        </View>
    );
}