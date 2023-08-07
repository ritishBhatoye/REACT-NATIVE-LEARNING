import { View, Text,Linking } from 'react-native'
import React from 'react'

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
      </View>
    </View>
  )
}

export default ActionCard
const styles=StyleSheet.create({
    headingText:{},
    card:{

    },
    elevatedCard:{
        
    },
    headingContainer:{

    },
    headerText:{

    },
},
)
