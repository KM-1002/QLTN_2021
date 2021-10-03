import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import ForgotPass from '../Screens/ForgotPass';
import TabNavigator from './TabNavigator';
import qrScanner from '../Screens/qrScanner';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="splash"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#00cfcb',
                },
                headerShadowVisible: false
            }}
        >
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
            <Stack.Screen
                name="signup"
                component={SignUp}
                options={{
                    title: 'Đăng ký'
                }}
            />
            <Stack.Screen
                name="forgotpass"
                component={ForgotPass}
                options={{
                    title: 'Đặt lại mật khẩu',
                }}
            />
            <Stack.Screen
                name="menu"
                component={TabNavigator}
                options={{
                    headerShown: false,
                }}
            />
             <Stack.Screen
                name="qrscan"
                component={qrScanner}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}
export default StackNavigator;