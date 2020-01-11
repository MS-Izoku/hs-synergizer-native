import React from "react";
import { Stylesheet, Text, View } from "react-native";

cardStyle = StyleSheet.create({
  container: {},
  cardName: {},
  cost: {},
  baseStat: {},
  cardImg: {},
  cardText: {}
});

const TCGCard = cardData => {
  const isDataUndefined = (data, replacementString) => {
    return data === undefined ? replacementString : data;
  };

  return (
    <View style={cardStyle.container}>
      <Text style={cardStyle.cardName}>
        {isDataUndefined(cardData.cardName, "Name")}
      </Text>
      <Text style={cardStyle.cost}>
        {isDataUndefined(cardData.cardName, "cost")}
      </Text>
      {cardData.cardType === "minion" ? (
        <View>
          <Text style={cardStyle.baseStat}>
            {isDataUndefined(cardData.cardName, "Attack")}
          </Text>
          <Text style={cardStyle.baseStat}>
            {isDataUndefined(cardData.cardName, "Health")}
          </Text>
        </View>
      ) : null}
      <Text style={cardStyle.cardText}>
        {isDataUndefined(cardData.cardName, "Card Text")}
      </Text>
      <Image
        style={cardStyle.cardImg}
        source={isDataUndefined(cardData.cardName, "getCardImg.jpeg")}
      />
      <Image
        style={cardStyle.cardFront}
        source={isDataUndefined(cardData.cardName, "getCardFront.jpeg")}
      />
    </View>
  );
};

export default TCGCard;
