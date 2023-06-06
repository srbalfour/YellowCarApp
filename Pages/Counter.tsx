import * as React from 'react';
import { StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';
import colours from '../constants/colours';
import { Text, Button } from 'react-native-paper';
import SegmentButtonMinus from '../components/SegmentButtonMinus';
import SegmentedButtonPlus from '../components/SegmentedButtonPlus';
import SegmentedButtonAddCounter from '../components/SegmentedButtonAddCounter';

const Counter = () => {
    const [count, setCount] = React.useState(0);

    return (


        //  <Text>Welcome to the counter.</Text>

        <View style={counterStyles.counter}>
            <View>
                <SegmentedButtonAddCounter count={count} setCount={setCount} />
            </View>

            <View>
                <Text>{count}</Text>
            </View>

            <View>

            </View>


        </View>
    )
};

const counterStyles = StyleSheet.create({
    counter: {

    },
});

export default Counter;
