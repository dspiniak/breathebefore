import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useReset } from '../../context/ResetContext';

const Timer = () => {
  const [timer, setTimer] = useState(1);
  const [timerRound, setTimerRound] = useState(1);
  const intervalRef = useRef(null);
  const { reset } = useReset();

  useEffect(() => {
    setTimer(1);
    setTimerRound(1);
    // console.log('timer started');
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 5) {setTimerRound(2);}
        if (prevTimer < 11) {return prevTimer + 1;}
        if (prevTimer >= 10) {return 11;}
      });
    }, 1000);
  
    if (reset) {
      if (intervalRef.current) {clearInterval(intervalRef.current);}
    }

    return (() => {
      if (intervalRef.current) {clearInterval(intervalRef.current);}
    });
    
  }, [reset]);



  return (
    <View style={styles.circleContainer}>
      {timer < 11 && (
        <Text style={styles.timer}>{timerRound === 1 ? 'inhala' : 'exhala'}{"\n"}{timer}</Text>

      )}
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 130,
  },
  timer: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: -60,
    textAlign: 'center',
  },
});

export default Timer;
