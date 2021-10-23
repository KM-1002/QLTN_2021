import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Splash from '../Screens/Splash';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import settingsAccount from '../Screens/SettingsAccount';
import TabNavigator from './TabNavigator';
import qrScanner from '../Screens/qrScanner';
import Information from "../Screens/Information"
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Settings from '../Screens/Settings';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="splash"
                screenOptions={{
                    headerMode: 'float',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#00cfcb',
                    },
                    headerShadowVisible: false,
                    gestureDirection: 'horizontal',
                    gestureEnabled: true,
                    ...TransitionPresets.SlideFromRightIOS
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
                    name="settingsAccount"
                    component={settingsAccount}
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
                <Stack.Screen
                    name="infor"
                    component={Information}
                    options={{
                        title: 'Cập nhật thông tin',

                    }}
                />
                <Stack.Screen
                    name="settings"
                    component={Settings}
                    options={{
                        headerTitle: "Cài đặt",
                        headerStyle: {
                            height: 80,
                            backgroundColor: '#00cfcb',
                        },
                        headerTitleAlign:'center'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default StackNavigator;