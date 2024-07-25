import React from 'react';
import { View, StyleSheet } from 'react-native';
import CircleAnimation from '../components/Circle/CircleAnimation';
import ShowButtons from '../components/Buttons/ShowButtons';
import AppStateListener from '../hooks/AppStateListener';


const BreatheScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <AppStateListener />
            <CircleAnimation />
            <ShowButtons />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default BreatheScreen;