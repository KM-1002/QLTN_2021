import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/Home";
import News from "../Screens/News";

const Tab = createBottomTabNavigator ();

const TabNavigator = () =>{
    return(
        <Tab.Navigator
        initialRouteName="home"
        tabBarOptions={{
                activeTintColor: '#e91e63',
                labelStyle: {
                  fontSize: 12,
                },
                style: {
                  backgroundColor: 'blue',
                },
            }}
        >  
            <Tab.Screen 
            name = "home" 
            component = {Home}
            options={{
                headerShown: false,
            }} 
            />
            <Tab.Screen 
            name = "news" 
            component = {News}
            options={{
                headerShown: false,
            }} 
            />
        </Tab.Navigator>
    )
}
export default TabNavigator;