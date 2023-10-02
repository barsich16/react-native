import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

const source = {
    html: `
<p style='text-align:center; font-size: large;'>
  21. Text from HTML
</p>`
};

export default function Task21() {
    const { width } = useWindowDimensions();
    return (
        <RenderHtml
            contentWidth={width}
            source={source}
        />
    );
}