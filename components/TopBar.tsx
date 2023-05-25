import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import colours from '../constants/colours';
import App from '../App';



const TopBarComponent = () => (

    <Appbar.Header style={Styles.TopBar}>
        {/* <Appbar.BackAction onPress={() => { }} /> */}
        <Appbar.Action icon="menu" onPress={() => { }} />
        <Appbar.Content
            title={<Text>Yellow Car</Text>}
            style={{ justifyContent:'center' }}
        />
    </Appbar.Header>

);

const Styles = StyleSheet.create({
    TopBar: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: colours.backgroundNav,
        width: '100%',
        fontWeight: 'bold'



    },

})

export default TopBarComponent;