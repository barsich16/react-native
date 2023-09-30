import EncryptedStorage from 'react-native-encrypted-storage';

export async function storeUserSession(storageName, data) {
    try {
        await EncryptedStorage.setItem(
            "storageName",
            JSON.stringify(data)
        );
        console.log('data is added');

        // Congrats! You've just stored your first value!
    } catch (error) {
        // There was an error on the native side
    }
}

export async function retrieveUserSession(storageName) {
    try {
        const session = await EncryptedStorage.getItem(storageName);

        if (session !== undefined) {
            console.log("From store");
            console.log(session);
            return session;
            // Congrats! You've just retrieved your first value!
        }
    } catch (error) {
        // There was an error on the native side
    }
}

export async function removeUserSession() {
    try {
        await EncryptedStorage.removeItem("user_session");
        // Congrats! You've just removed your first value!
    } catch (error) {
        // There was an error on the native side
    }
}

export async function clearStorage() {
    try {
        await EncryptedStorage.clear();
        // Congrats! You've just cleared the device storage!
    } catch (error) {
        // There was an error on the native side
    }
}