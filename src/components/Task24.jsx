import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet, PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import {Contact} from './Contact';
const Task24 = () => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
        })
            .then((res) => {
                // console.log('Permission: ', res);
                Contacts.getAll()
                    .then((contacts) => {
                        // work with contacts
                        // console.log(contacts);
                        setContacts(contacts);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            })
            .catch((error) => {
                console.error('Permission error: ', error);
            });
    }, []);

    // useEffect(() => {
    //     Contacts.getAll().then(contacts => {
    //         setContacts(contacts);
    //     });
    // }, []);

    const keyExtractor = (item, idx) => {
        return item?.recordID?.toString() || idx.toString();
    };
    const shortContacts = [];
    contacts.forEach((item, index) => {
        if (index < 5) {
            shortContacts.push(item);
        }
    })
    const renderItem = ({item, index}) => {
        return <Contact contact={item} />;
    };
    return (
        <FlatList
            data={contacts}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            style={styles.list}
        />
    );
};
const styles = StyleSheet.create({
    list: {
        height: 300
        // flex: 1,
    },
});
export default Task24;