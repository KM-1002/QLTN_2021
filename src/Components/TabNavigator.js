import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "../Screens/Home";
import News from "../Screens/News";
import Information from "../Screens/Information"
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

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
                tabBarStyle: {
                    borderTopWidth: 0.2,
                    borderColor: '#C0C0C0',
                    shadowColor: 'grey',
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 10,
                    shadowOpacity: 1
                },
                tabBarLabelStyle: { fontSize: 10 },
                tabBarItemStyle: { paddingTop: 15, alignItems: 'center', },
                tabBarContentContainerStyle: { height: 60, },
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
                        <Icon name="home" size={20} color={color} />
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
                        <Icon2 name="newspaper-o" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="thongbao"
                component={News}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Thông báo',
                    tabBarIcon: ({ color }) => (
                        <Icon1 name="notifications-outline" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="canhan"
                component={News}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Cá nhân',
                    tabBarIcon: ({ color }) => (
                        <Icon1 name="person-outline" size={20} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
export default TabNavigator;