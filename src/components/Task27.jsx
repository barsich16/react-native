import React, {useState} from 'react';
import {
    Text,
    Button,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const Task27 = () => {
    const [copiedText, setCopiedText] = useState('');

    const copyToClipboard = () => {
        Clipboard.setString('hello world');
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        setCopiedText(text);
    };

    return (
            <>
                <Button title={'27. Click here to copy to Clipboard'} onPress={copyToClipboard}/>
                <Button title={'View copied text'} onPress={fetchCopiedText}/>
                <Text style={{color: 'red', textAlign: 'center'}}>Text from clipboard: {copiedText}</Text>
            </>
    );
};

export default Task27;