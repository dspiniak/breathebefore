import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BreatheScreen from './src/screens/BreatheScreen';
import { ResetProvider, useReset } from './src/context/ResetContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ResetProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Breathe">
          <Stack.Screen name="Breathe" component={BreatheScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ResetProvider>
  );
}

export default App;
