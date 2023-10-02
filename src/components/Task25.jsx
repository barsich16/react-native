import React, { useState } from 'react'
import {Button, Text} from 'react-native'
import DatePicker from 'react-native-date-picker'

export const Task25 = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button title="25. Open date selector" onPress={() => setOpen(true)} />
            <DatePicker
                modal
                open={open}
                date={date}
                mode="date"
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            <Text>Your date is: {date.toLocaleDateString()}</Text>
        </>
    )
}