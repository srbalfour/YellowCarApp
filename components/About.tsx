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
                <Dialog visible={visible} onDismiss={onClose} >
                    <Dialog.Title style={{ color: colours.textPrimary }}>About</Dialog.Title>

                    <Dialog.Actions>
                        <Button onPress={onClose}>Cancel</Button>
                        <Button onPress={() => {
                            
                            onClose();
                        }}>Add</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    )
};

export default About;