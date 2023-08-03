import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';

export default function App() {
 const isDarkmode=useColorScheme()==='dark';
  return (
    <SafeAreaView>
      <ScrollView>
 <FlatCard />
 <ElevatedCard/>
 </ScrollView>
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent:"center"
  },
  whiteText:{
    color:"#FFFFFF"
  },
  darkText:{
    color:"#000000"
  }
});
