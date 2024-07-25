import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedCircle from './AnimatedCircle';
import Timer from './Timer';

const CircleAnimation = () => {

  return (
    <View style={styles.container}>
      <AnimatedCircle />
      <Timer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
  }
});

export default CircleAnimation;
