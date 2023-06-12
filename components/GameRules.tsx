import { Touchable, TouchableOpacity, View } from 'react-native';
import colours from '../constants/colours';
import React, { Component, useState } from 'react';
import YellowCarGame, { Player } from '../Pages/YellowCarGame';
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

interface props {
    visible: boolean;
    player: Player;
    onClose: () => void;
}

const GameRules = ({ visible, player, onClose }: props) => {

    return (
        <View>
            <Portal>

                <Dialog visible={visible} onDismiss={onClose} style={wonStyles.dialog}>
                    <Dialog.Title style={{ color: colours.textPrimary }}>Game Won</Dialog.Title>

                    <Dialog.Content>
                        <Text style={{ color: colours.textSecondary }} variant="bodyMedium">{player.username} has won Yellow Car</Text>
                    </Dialog.Content>

                    <Dialog.Actions>
                        <Button onPress={onClose} textColor={colours.textPrimary}>Okay</Button>
                    </Dialog.Actions>
                </Dialog>

            </Portal>
        </View>

    )
};

const wonStyles = StyleSheet.create({
    dialog: {
        backgroundColor: colours.backgroundNav,
        color: colours.textPrimary,
    },

}
);

export default GameRules;