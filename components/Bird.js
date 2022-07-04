import React from "react";
import { View, Image } from "react-native";

const Bird = ({ birdBottom, birdLeft }) => {
  const birdWidth = 80;
  const birdHeight = 55;
  return (
    <Image
      source={require("../assets/blue.png")}
      style={{
        position: 'absolute',
        width: birdWidth,
        height: birdHeight,
        left: birdLeft - (birdWidth / 2),
        bottom: birdBottom - (birdHeight / 2),
      }}
    />
  );
};

export default Bird;
