import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true}style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>TAP</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>more....</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>😛</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:8
    },
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8                                                                                                                                                                                                                                                                                                                                                                                                                   
    },
    card:{
    flex:1,
    width:100,
    height:100,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:4,
    margin:8,
    color:'#000000'
    },
    cardElevated:{
    backgroundColor:"#CAD5E2",
    },
    
})