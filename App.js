import { Platform,  StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigator';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {

  return (
      <NavigationContainer >
        <SafeAreaView>
          <StatusBar style='light' backgroundColor='#075E54'/>
           <Header/>
        </SafeAreaView>
        <Navigator/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
