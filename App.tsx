import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopBarComponent from './components/TopBar';
import BottomBar from './components/BottomBar';
import colours from './constants/colours';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider settings={{
      icon: (props) => <AwesomeIcon {...props} />
    }}>
      <SafeAreaProvider>
        <View style={styles.container}>

          <TopBarComponent></TopBarComponent>


          <Text>Yellow Car! I win. Toot Toot.</Text>

          

          <StatusBar style="auto" />

          <BottomBar></BottomBar>

        </View>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colours.backgroundMain,
  },
});
