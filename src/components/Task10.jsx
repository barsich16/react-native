import React, {useEffect, useState} from 'react';
import {Pressable, Text, TextInput, View, StyleSheet} from "react-native";
import EncryptedStorage from "react-native-encrypted-storage";

const styles = StyleSheet.create({
    task: {
        marginVertical: 10,
        // borderStyle: 'solid',
        // borderBottomWidth: 1,
        // borderTopWidth: 1,
        // borderColor: '#fff'
    },
    header: {
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        color: '#fff',
    },
    panel: {
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 16,
    },
    text: {
        fontSize: 16,
        paddingTop: 10,
    },
    inputField: {
        backgroundColor: '#fff',
        height: 44,
        borderWidth: 1,
        borderColor: '#333',
        color: 'black',
        // width: '100%',
        padding: 10,
        marginTop: 12,
    },
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    buttonText: {
        fontSize: 18,
        color: '#444',
    },
});

export const Task10 = () => {

    const [input, setInput] = useState('');

    useEffect(() => {
        // Зчитуємо дані зі сховища при завантаженні компоненту
        getData();
    }, []);

    const storeData = async () => {
        try {
            await EncryptedStorage.setItem(
                'user2',
                input);
            alert('Data successfully saved');
        } catch (error) {
            console.error('Помилка при збереженні даних:', error);
        }
    };

    const getData = async () => {
        try {
            console.log('Getting');
            const value = await EncryptedStorage.getItem('user2');
            if (value !== null) {
                setInput(value);
            }
        } catch (error) {
            console.error('Помилка при зчитуванні даних:', error);
        }
    };

    const clearStorage = async () => {
        try {
            await EncryptedStorage.clear();
            alert('Storage successfully cleared!');
        } catch (e) {
            alert('Failed to clear the async storage.');
        }
    };

    const onChangeText = value => setInput(value);

    const onSubmitEditing = () => {
        if (!input) return;

        storeData(input);
        setInput('');
    };

    return (
        <View style={styles.task}>
            <View style={styles.header}>
                <Text style={styles.title}>10. EncryptedStorage</Text>
            </View>
            <View style={styles.panel}>
                <Text style={styles.label}>Enter your input here:</Text>
                <TextInput
                    style={styles.inputField}
                    value={input}
                    placeholder="Enter"
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmitEditing}
                />
                <Text style={styles.text}>Your input is {input}</Text>
                <Pressable onPress={clearStorage} style={styles.button}>
                    <Text style={styles.buttonText}>Clear Storage</Text>
                </Pressable>
            </View>
        </View>
    )
}


