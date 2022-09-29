// imports
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../screens/Homepage';

// Stack Navigator for the main app
const Stack = createNativeStackNavigator()

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Homepage} />
        </Stack.Navigator>
    )
}


export default MainStackNavigator