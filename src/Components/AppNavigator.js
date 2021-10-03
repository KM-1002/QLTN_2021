import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import 'react-native-gesture-handler';
import TabNavigator from './TabNavigator';

const AppNavigator = ({ navigation }) => {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}
export default AppNavigator;