// Component to show "go to next app" button
import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import RrssButton from './RrssButton';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { useReset } from '../../context/ResetContext';

const ShowButtons = () => {
    const [showButton, setShowButton] = useState(false);
    const [showExit, setShowExit ] = useState(false);
    const { reset } = useReset();

    const startShowButtons = useCallback(() => {
        setShowButton(false);
        setShowExit(false);
        const timer = setTimeout(() => {
            // console.log('entered ShowButton timer')
            setShowButton(true);
        }, 10100); // 10k = 10 seconds

        return () => clearTimeout(timer);
    }, []);

    const exitPress = () => {
        setShowButton(false);
        setShowExit(true);  
      };

    useEffect(() => {
        const cleanup = startShowButtons();
        return cleanup;
    }, [reset]);



    return (
        <View style={styles.absoluteContainer}>
            {showButton && (
                <>
                    <TouchableOpacity onPress={exitPress}>
                      <Text style={styles.exitText}>⦻      No entrar     ⦻ {'\n'} </Text>
                    </TouchableOpacity>
                    <RrssButton 
                        url="instagram"
                        label="instagram"
                        logo={<AntDesign name="instagram" size={40} color="white" />}
                    />
                    <RrssButton 
                        url='facebook'
                        label="facebook"
                        logo={<FontAwesome5 name="facebook" size={40} color="white" />}
                    />
                    <RrssButton 
                        url="twitter"
                        label="x"
                        logo={<FontAwesome6 name="x-twitter" size={40} color="white" />}
                    />
                    <RrssButton 
                        url='snssdk1128'
                        label="tiktok"
                        logo={<FontAwesome5 name="tiktok" size={40} color="white" />}
                    />
                </>
            )}
            {showExit && <Text style={styles.peaceSymbol}></Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    absoluteContainer: {
        position: 'absolute',
        // alignItems: 'center',
        width: '100%', // Ensure the button is centered horizontally
        bottom: 100,
        left: 30
    },
    text: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
    },
    exitText: {
        fontSize: 25,
        color: '#FFFFFF',
        bottom: 0,
        fontWeight: 'bold',
        textAlign: 'center',
        right: 21
    },
    peaceSymbol: {
        fontSize: 25,
        color: '#FFFFFF',
        bottom: 100,
        textAlign: 'center'        
    }
});

export default ShowButtons;
