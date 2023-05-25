import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopBarComponent from './components/TopBar';
import colours from './constants/colours';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>

        <TopBarComponent></TopBarComponent>


        <Text>Yellow Car! I win. Toot Toot.</Text>


        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colours.backgroundMain,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
