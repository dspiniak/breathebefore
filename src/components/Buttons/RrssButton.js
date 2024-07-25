// Component to show "next app" button for ConfigureScreen
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';
import * as Clipboard from 'expo-clipboard';

const RrssButton = ({ url, logo, label }) => {
  const [text, setText] = useState('');

  const copyToClipboard = async (text) => {
    await Clipboard.setStringAsync(text);
    console.log('copied to clipboard: '+text);
  };

  const readFromClipboard = async () => {
    const content = await Clipboard.getStringAsync();
    console.log('Text retrieved from clipboard: '+content);
  };

  readFromClipboard();

  return (
    <TouchableOpacity
      // onPress={() => {}
      // style={[styles.button]}
      onPress={() =>{
        copyToClipboard(label);
        Linking.openURL(`shortcuts://run-shortcut?name=BreatheBefore`);
        // Linking.openURL(`${url}://app`);
      }} style={[styles.button]}
    >
      <Text style={[styles.text1]}>{logo}</Text>
      <Text style={[styles.text2]}>   {label}</Text>
      <Text style={[styles.text2]}> ►</Text>
    </TouchableOpacity>
  );
};
// ☮
const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5, // Default margin between buttons
    flexDirection: 'row',
    marginLeft: 60
  },
  text1: {
    color: '#FFFFFF', // Default text color
    fontSize: 25,
    // fontWeight: 'bold',
    // textAlign: 'left',
  },
  text2: {
    color: '#FFFFFF', // Default text color
    fontSize: 25,
    flex: 1,

    // fontWeight: 'bold',
    // textAlign: 'left',
  },
  text3: {
    color: '#FFFFFF', // Default text color
    fontSize: 25,
    // fontWeight: 'bold',
    // textAlign: 'left',
  },
});

export default RrssButton;
