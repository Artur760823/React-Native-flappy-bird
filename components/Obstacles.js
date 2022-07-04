import React from "react";
import { View, Image } from "react-native";

const Obstacles = ({ obsticlesLeft, obsticlesWidth, obsticlesHeight, gap }) => {


  return (
  <View>
      <Image
        source={require('../assets/pipe.png')}
        style={{
          position: "absolute",
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
