import {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Bird from './components/Bird';
import Obstacles from './components/Obstacles';

export default function App() {

  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const [obsticlesLeft, setObsticleLeft] = useState(screenWidth);
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const obsticlesWidth = 60;
  const obsticlesHeight = 300;
  const gap = 200;
  const gravity = 3;
  let gameTimerId;
  let obsticlesLeftTimerId;

  useEffect(()=>{
    if(birdBottom > 0){
      gameTimerId = setInterval(()=>{
        setBirdBottom(birdBottom => birdBottom - gravity)
      }, 30);

      return () =>{
        clearInterval(gameTimerId);
      }
    }
  }, [birdBottom]);


  useEffect(()=>{
    if(obsticlesLeft > -obsticlesWidth){
      obsticlesLeftTimerId = setInterval(()=>{
        setObsticleLeft(obsticlesLeft => obsticlesLeft - 5);
      }, 30)
      return () => clearInterval(obsticlesLeftTimerId)
    }

  }, [obsticlesLeft]);

  return (
    <View style={styles.container}>
      <Bird 
        birdBottom = {birdBottom}
        birdLeft = {birdLeft}
      />
      <Obstacles 
        obsticlesLeft={obsticlesLeft}
        obsticlesWidth={obsticlesWidth}
        obsticlesHeight={obsticlesHeight}
        gap={gap}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
