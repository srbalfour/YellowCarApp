import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import colours from '../constants/colours';
import App from '../App';
import { BottomNavigation } from 'react-native-paper';
import PlayGame from '../Pages/YellowCarGame';
import Counter from '../Pages/Counter';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


interface Props {
    navigation: any;
}

const BottomBar = ({ navigation }: Props) => (
    <Appbar style={bottomStyles.bottom}>
        <Appbar.Action icon="play" iconColor={colours.textSecondary} onPress={() => {
            navigation.navigate('YellowCar')
        }} />

        <View style={bottomStyles.verticalLine}></View>

        <Appbar.Action icon="unsorted" iconColor={colours.textSecondary} onPress={() => {
            navigation.navigate('Counter')
        }} />

    </Appbar>
);





const bottomStyles = StyleSheet.create({

    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: colours.backgroundMain,
        borderTopWidth: 2,
        borderTopColor: colours.backgroundNav,
        width: '100%',
        justifyContent: 'space-evenly',

    },
    verticalLine: {
        height: '100%',
        width: 2,
        backgroundColor: colours.backgroundNav,
    },

});

export default BottomBar;
