import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/Home";
import News from "../Screens/News";
import Information from "../Screens/Information"

const Tab = createBottomTabNavigator();

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
            }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="news"
                component={News}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}
export default TabNavigator;