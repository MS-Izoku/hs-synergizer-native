import React from "react";
import { Text } from "react-native";

const AboutUs = () => {
  return (
    <View style={aboutUsStyle.container}>
      <Text style={aboutUsStyle.description}>This is the about us page</Text>
      <Text>
        Powered by <Text style={aboutUsStyle.hyperlink}>HearthstoneAPI</Text>
      </Text>
    </View>
  );
};

export default AboutUs;
