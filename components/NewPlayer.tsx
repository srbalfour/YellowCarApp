import * as React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import colours from '../constants/colours';

interface Props {
  visible: boolean;
  setPlayers: React.Dispatch<React.SetStateAction<{
    id: number;
    username: string;
    score: number;
  }[]>>;
  onClose: () => void;
}



const NewPlayer = ({ visible, setPlayers, onClose }: Props) => {

  const [name, setName] = React.useState('');

//******************MAKE SURE USER ENTERS NAME AND NAME IS NOT IN USE******************/

  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={onClose} style={dialogStyles.dialog}>
          <Dialog.Title style={{ color: colours.textPrimary }}>Player Name</Dialog.Title>
          <Dialog.Content>
            <Text style={{ color:colours.textSecondary }} variant="bodyMedium">Please Enter Your Name:</Text>
            <SafeAreaView>
              <TextInput
                style={dialogStyles.input}
                onChangeText={setName}
                placeholder='My Name'
                value={name}
              />

            </SafeAreaView>

          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={onClose} textColor={colours.textPrimary}>Cancel</Button>
            <Button onPress={() => {
              setPlayers(players => [...players, { id: players.length, username: name, score: 0 }]);
              onClose();
            }} textColor={colours.textPrimary}>Add</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const dialogStyles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: colours.backgroundMain,
    color: colours.textPrimary,
  },
  dialog: {
    backgroundColor: colours.backgroundNav,
    color: colours.textPrimary,
  },

});

export default NewPlayer;