import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import 'react-native-gesture-handler';

const AppNavigator = ({ navigation }) => {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}
export default AppNavigator;