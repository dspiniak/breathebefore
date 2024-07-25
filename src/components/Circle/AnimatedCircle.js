import React, { useEffect, useRef, useCallback } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useReset } from '../../context/ResetContext';

const AnimatedCircle = () => {
  const { reset } = useReset();
  // Initialize the animated value to 3 and persist it across re-renders
  const circleScale = useRef(new Animated.Value(3)).current;

  const startAnimation = useCallback(() => {
    const animation = Animated.sequence([
      Animated.timing(circleScale, {
        toValue: 6,
        duration: 5000,
        useNativeDriver: true,
      }),
      Animated.timing(circleScale, {
        toValue: 3,
        duration: 5000,
        useNativeDriver: true,
      }),
    ]);

    animation.start();

    // Cleanup function to stop the animation when the component unmounts or resets
    return () => {
      animation.stop();
    };
  }, []);

  useEffect(() => {
    // Start the animation once initially
    // console.log('animation started');
    startAnimation();

    if (reset) {
      // console.log('entered AnimatedCircle reset');
      circleScale.setValue(3);
      const cleanup = startAnimation();
      return cleanup;
    }

    // Cleanup function to stop the animation when the component unmounts
  }, [reset]); // Dependency array to ensure the effect runs when circleScale changes

  return (
    <Animated.View
      style={[
        styles.circle,
        { transform: [{ scale: circleScale }] },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 500
  },
});

export default AnimatedCircle;
