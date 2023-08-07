import { View, Text,Linking,Image, TouchableOpacity } from 'react-native'
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
        uri:'https://images.pexels.com/photos/17788608/pexels-photo-17788608/free-photo-of-couple-standing-against-horse-on-ends-with-riders-and-herd-of-horses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }}
      style={styles.cardImage}
      />
      </View>
      <View style={styles.bodyContainer}>
        <Text numberOfLines={3}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quas minima esse, beatae rerum mollitia excepturi ea 
            tenetur quasi libero deserunt eaque, soluta maxime
            nemo architecto dolor! Neque officia tempore natus?
        </Text>
      </View>
      <View style={styles.footerContainer}>
     <TouchableOpacity 
     onPress={()=>openWebsite('https://reactnative.dev/docs/image')}>
        <Text style={styles.socialLinks}>Read More</Text>
      </TouchableOpacity>
      <TouchableOpacity
     onPress={()=>openWebsite('https://reactnative.dev/docs/image')}
     >
        <Text style={styles.socialLinks}>Follow Me</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
export default ActionCard
const styles=StyleSheet.create({
headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,
},
card:{
    height:360,
    width:350,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16
 },
elevatedCard:{
        backgroundColor:'#E07C24',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4
},
headingContainer:{
height:40,
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
 },
headerText:{
color:'#000',
fontSize:16,
fontWeight:'600'
    },
cardImage:{
    height:190,
},
bodyContainer:{
    padding:10,
},
footerContainer:{
padding:8,
flexDirection:'row',
alignItems:'center',
justifyContent:'space-evenly'
},
socialLinks:{
    fontSize:16,
    color:'#000000',
    backgroundColor:'#FFF',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6

}
},

)
