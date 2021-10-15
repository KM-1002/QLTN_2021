import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "../Screens/Home";
import News from "../Screens/News";
import Information from "../Screens/Information"
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from  'react-native-vector-icons/AntDesign';
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#00cfcb',
                },
                headerShadowVisible: false,
                title: 'Centered',
                headerTitleAlign: 'center',
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'black',
                tabBarIndicatorStyle: {
                    width: 0, height: 0, elevation: 0,
                },
                tabBarStyle: { borderTopColor: 'black', borderTopWidth: 2 },
                tabBarLabelStyle: { fontSize: 12 },

            }}
            tabBarPosition='bottom'
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" size={22} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="news"
                component={News}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Tin tức',
                    tabBarIcon: ({ color }) => (
                        <Icon1 name="calendar" size={22} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="lichhen"
                component={News}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Lịch hẹn'
                }}
            />
            <Tab.Screen
                name="canhan"
                component={News}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Cá nhân'
                }}
            />
        </Tab.Navigator>
    )
}
export default TabNavigator;