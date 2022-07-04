import React from "react";
import { View } from "react-native";

const Obstacles = ({ obsticlesLeft, obsticlesWidth, obsticlesHeight, gap }) => {


  return (
    <View>
      <View
        style={{
          position: "absolute",
          backgroundColor: "green",
          width: obsticlesWidth,
          height: obsticlesHeight,
          left: obsticlesLeft,
          bottom: 0 + obsticlesHeight + gap,
        }}
      />

<View
        style={{
          position: "absolute",
          backgroundColor: "green",
          width: obsticlesWidth,
          height: obsticlesHeight,
          left: obsticlesLeft,
          bottom: 0,
        }}
      />
    </View>
  );
};

export default Obstacles;
