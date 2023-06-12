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
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import YellowCarGame from './Pages/YellowCarGame';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colours.backgroundMain,
    secondaryContainer: 'transparent',
  },
};

export default function App() {
  return (
    <PaperProvider settings={{
      icon: (props) => <AwesomeIcon {...props} />
    }}>
      <SafeAreaProvider>
        <View style={styles.container}>

          <TopBarComponent />

          <NavigationContainer theme={theme}>
            <Tab.Navigator initialRouteName="YellowCar" labeled={false} activeColor={colours.backgroundNav}  barStyle={{ backgroundColor: colours.backgroundNav }}>
              <Tab.Screen name="YellowCar" component={YellowCarGame}
              options={{
                tabBarIcon: ({ color }) => (
                  <AwesomeIcon name="play" color={colours.textSecondary} size={26} />
                ),
              }}
              />
              <Tab.Screen name="Counter" component={Counter} 
              
              options={{
                tabBarIcon: ({ color }) => (
                  <AwesomeIcon name="unsorted" color={colours.textSecondary} size={26} />
                ),
                
              }}
              />
            </Tab.Navigator>
          </NavigationContainer>

          <StatusBar style="auto" />
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
