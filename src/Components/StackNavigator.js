import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import ForgotPass from '../Screens/ForgotPass';

const Stack = createNativeStackNavigator();

const StackNavigator = ({navigation} ) => {
    return (
        <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#00cfcb' },
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
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="forgotpass"
                component={ForgotPass}
                options={{
                    title:'Đặt lại mật khẩu',
                }}
            />
        </Stack.Navigator>
    );
}
export default StackNavigator;