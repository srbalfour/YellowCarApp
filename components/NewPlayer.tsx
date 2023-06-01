import * as React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const NewPlayer = ({ visible, onClose }: Props) => {
  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={onClose}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">This is simple dialog</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={onClose}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default NewPlayer;