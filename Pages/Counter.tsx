import * as React from 'react';
import { StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';
import colours from '../constants/colours';
import { Text, Button } from 'react-native-paper';
import SegmentButtonMinus from '../components/SegmentButtonMinus';
import SegmentedButtonPlus from '../components/SegmentedButtonPlus';
import SegmentedButtonAddCounter from '../components/SegmentedButtonAddCounter';
import SegmentedButtonRemoveCounter from '../components/SegmentedButtonRemoveCounter';

const Counter = () => {
    const [count, setCount] = React.useState(0);

    return (

        <View style={counterStyles.buttons}>
            <View>
                <SegmentedButtonAddCounter count={count} setCount={setCount} />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={counterStyles.counter}>{count}</Text>
            </View>

            <View>
                <SegmentedButtonRemoveCounter count={count} setCount={setCount} />
            </View>


        </View>
    )
};

const counterStyles = StyleSheet.create({
    counter: {
        color: colours.textPrimary,
        fontSize: 100,
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    buttons: {
        flex: 1,
        flexDirection: 'column',
        margin: 30,
        justifyContent: 'space-evenly',
    },
});

export default Counter;
