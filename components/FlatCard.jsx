import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
        <Text style={styles.whiteText}>RED</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
        <Text style={styles.whiteText}>BLUE</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
        <Text style={styles.whiteText}>GREEN</Text>
        </View>
        <View style={[styles.card,styles.cardOne]}>
        <Text style={styles.whiteText}>RED</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8                                                                                                                                                                                                                                                                                                                                                                                                                   
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding :8
    },
    card:{
        flex:1,
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        justifyContent:'center',
        alignItems:'center'
    },
    cardOne:{
        backgroundColor:'#EF5354',
    },
    cardTwo:{
        backgroundColor:'#50DBB4'
    },
    cardThree:{
        backgroundColor:'#5DA3FA'
    },
    whiteText:{
        color:'white'
    }
})