import React from "react";
import { View } from "react-native";

const footerStyleSheet = {
  coreContainer: { backgroundColor: "blue" }
};
const AppFooter = () => {
  return (
    <View style={footerStyleSheet.coreContainer}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </View>
  );
};

export default AppFooter;
