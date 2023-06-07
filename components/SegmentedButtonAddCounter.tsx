import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SegmentedButtons } from 'react-native-paper';
import colours from '../constants/colours';

interface Props {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const SegmentedButtonAddCounter = ({ count, setCount }: Props) => {
    const [segmentedButtonValue, setSegmentedButtonValue] = useState('');

    const handleIncrement = (increment: number) => {
        setCount((count) => count + increment);
    }

    return (
        <TouchableOpacity>
            <SegmentedButtons style={counterButtonsPlus.buttons} value={segmentedButtonValue} onValueChange={() => null}
                buttons={[{
                    value: 'add one',
                    label: '+ 1',
                    uncheckedColor: colours.textSecondary,
                    checkedColor: colours.textSecondary,
                    onPress: () => handleIncrement(1),
                },
                {
                    value: 'add half',
                    label: '+ 0.5',
                    uncheckedColor: colours.textSecondary,
                    checkedColor: colours.textSecondary,
                    onPress: () => handleIncrement(0.5),
                },
                {
                    value: 'add quarter',
                    label: '+ 0.25',
                    uncheckedColor: colours.textSecondary,
                    checkedColor: colours.textSecondary,
                    onPress: () => handleIncrement(0.25),
                }
                ]}
            />
        </TouchableOpacity>
    )
}

export default SegmentedButtonAddCounter;

const counterButtonsPlus = StyleSheet.create({
    buttons: {
        borderRadius: 25,
        backgroundColor: colours.backgroundNav,
        color: colours.textSecondary,
        justifyContent: 'center',
    },
})