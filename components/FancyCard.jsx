import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card,styles.cardElevated]}>
      <Image 
      source={{
        uri:'https://images.unsplash.com/photo-1587702068694-a909ef4aa346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
      }}
      style={styles.cardImage}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>FURNISHED HOUSE </Text>
        <Text style={styles.cardLabel}>Delhi,India </Text>
        <Text style={styles.cardDescription}>Punjab,India</Text>
        <Text style={styles.cardFooter}>12 mins away</Text>
      </View>
      </View>
    </View>
  )
}

export default FancyCard;
const styles=StyleSheet.create({
    headingText:{
fontSize:24,
fontWeight:"bold",
paddingHorizontal:8,
    },
    card:{
width:350,
height:360,
borderRadius:6,
marginVertical:12,
marginHorizontal:12,
    },
    cardElevated:{
backgroundColor:'#FFFFFF',
elevation:3,
shadowOffset:{
    width:1,
    height:1,
}
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
flex:1,
flexGrow:1,
paddingHorizontal:12,
    },
    cardTitle:{
color:'#000000',
fontSize:22,
fontWeight:'bold',
marginBottom:6,
marginBottom:4
    },
    cardLabel:{
color:'#000000',
fontSize:14,
marginBottom:4
    },
    cardDescription:{
color:'#242B2E',
fontSize:12,
marginBottom:6
    },
    cardFooter:{
color:'#000000',
marginBottom:12,
flexShrink:1,
marginTop:6,

    },
})
