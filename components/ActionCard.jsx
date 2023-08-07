import { View, Text,Linking,Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
const ActionCard = () => {
    function openWebsite(websiteLink){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>BLOG CARD</Text>
      <View style={[styles.card,styles.elevatedCard]}>
      <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
           What's new in JavaScript 21 - ES12
        </Text>
      </View>
      <Image
      source={{
        uri:'https://images.unsplash.com/photo-1548567117-02328f050eaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
      }}
      style={styles.cardImage}
      />
      </View>
      <View style={styles.bodyContainer}>
        <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quas minima esse, beatae rerum mollitia excepturi ea 
            tenetur quasi libero deserunt eaque, soluta maxime
            nemo architecto dolor! Neque officia tempore natus?
        </Text>
      </View>
    </View>
  )
}

export default ActionCard
const styles=StyleSheet.create({
headingText:{
},
card:{
 
 },
elevatedCard:{
        
},
headingContainer:{

 },
headerText:{

    },
cardImage:{
    height:100,
},
bodyContainer:{},
},
)
