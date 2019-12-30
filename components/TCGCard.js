import React from 'react'
import {Stylesheet , Text , View} from 'react-native'


const TCGCard = (cardData) =>{
        return<View>
            <Image style={} source={}/>
            <Text>{cardData.name}</Text>
            <Text>{cardData.cost}</Text>

            <Text>{cardData.card_text}</Text>
            <Image style={} source={}></Image>

            {/* <Text>{cardData.tribe}</Text>
            <Text>{cardData.health}</Text>
            <Text>{cardData.attack}</Text> */}
        </View>
}

export default TCGCard