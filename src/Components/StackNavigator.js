import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';

const Stack = createNativeStackNavigator();

const StackNavigator = ({navigation} ) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="splash"
                component={Splash}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="signin"
                component={SignIn}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}
export default StackNavigator;