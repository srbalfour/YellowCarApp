import * as React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import colours from '../constants/colours';

interface Props {
    visible: boolean;
    onClose: () => void;
  }

const About = ({visible, onClose}: Props) => {


    return (

        <View>
            <Portal>
                <Dialog visible={visible} onDismiss={onClose} style={aboutStyles.dialog}>
                    <Dialog.Title style={{ color: colours.textPrimary }}>About</Dialog.Title>

                    <Dialog.Content>
                        <Text style={{ fontSize:10, color: colours.textSecondary }}>App by Shanna Balfour, 2023. Visit https://github.com/srbalfour/YellowCarApp to see more.</Text>
                    </Dialog.Content>

                    <Dialog.Actions>
                        <Button onPress={() => {onClose();}} textColor={colours.textPrimary}>Close</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    )
};

const aboutStyles = StyleSheet.create({
    dialog: {
        backgroundColor: colours.backgroundMain,

    },

});

export default About;