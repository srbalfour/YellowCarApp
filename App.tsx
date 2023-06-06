import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopBarComponent from './components/TopBar';
import BottomBar from './components/BottomBar';
import PlayGame from './Pages/YellowCarGame';
import colours from './constants/colours';
import { PaperProvider } from 'react-native-paper';
import Counter from './Pages/Counter'

export default function App() {
  return (
    <PaperProvider settings={{
      icon: (props) => <AwesomeIcon {...props} />
    }}>
      <SafeAreaProvider>
        <View style={styles.container}>

          <TopBarComponent></TopBarComponent>


          {/* <PlayGame></PlayGame> */}
          <Counter />
          

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
