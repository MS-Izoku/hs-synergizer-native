import React, { Component } from "react";
import { Stylesheet, Text, View } from "react-native";
import TCGCard from "../components/TCGCard";

const gridStyle = StyleSheet.create({
  container: {
    display: "grid",
    alignItems: "center"
  },
  gridElement: {}
});

export class CardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          name: "Card Name",
          cardImg: "#",
          cost: "0",
          attack: "0",
          health: "0",
          cardText: "<b>Card Text</b>",
          cardFront: "#",
          cardType: "minion"
        }
      ]
    };
  }

  generateCards = () => {
    return this.state.cards.map(card => {
      return <TCGCard style={gridStyle.gridElement} card={card} />;
    });
  };
  render() {
    return <View style={gridStyle.container}>{this.generateCards}</View>;
  }
}
