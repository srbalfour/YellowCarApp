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

        <View style={counterStyles.counter}>
            <View>
                <SegmentedButtonAddCounter count={count} setCount={setCount} />
            </View>

            <View>
                <Text>{count}</Text>
            </View>

            <View>
                <SegmentedButtonRemoveCounter count={count} setCount={setCount} />
            </View>


        </View>
    )
};

const counterStyles = StyleSheet.create({
    counter: {

    },
});

export default Counter;
