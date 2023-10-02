import { StyleSheet, Button, View } from 'react-native';
import Share from 'react-native-share';
export default function Task26() {
    const options = {
        title: 'My thoughts.',
        message: 'I want to share more with the world!',
        url: 'https://google.com'
    }
    const onShare = async (myOptions = options) => {
        try {
            await Share.open(myOptions);
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <View style={styles.container}>
            <Button onPress={async () => {
                await onShare();
            }} title="26. Share" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});