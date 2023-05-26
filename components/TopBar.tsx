import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import colours from '../constants/colours';
import App from '../App';

const TopBarComponent = () => (

    <Appbar.Header style={Styles.TopBar}>
        {/* <Appbar.BackAction onPress={() => { }} /> */}
        <Appbar.Content
            title="Yellow Car"
            titleStyle={{ fontWeight: 'bold', color: colours.textPrimary }}
            style={{ justifyContent: 'center' }}
        />
        <Appbar.Action size={20} color={colours.textSecondary} icon="gears" style = {{ paddingRight: 10 }} onPress={() => { }} />
    </Appbar.Header>

);

const Styles = StyleSheet.create({
    TopBar: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: colours.backgroundNav,
        width: '100%',
        setFontWeight: {
            fontWeight: 'bold',
        },
        setColour: {
            color: colours.textPrimary,
        },
        



    },

})

export default TopBarComponent;