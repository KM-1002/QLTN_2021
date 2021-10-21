import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "../Screens/Home";
import News from "../Screens/News";
import Information from "../Screens/Information"
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Personal from '../Screens/Personal';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
    SafeAreaView,
} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const CustomButtonTab = () => (
    <TouchableOpacity
        style={{ width: 70, height: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 35, position: 'absolute', top: -45, backgroundColor: 'black' }}
    >
        <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: 'red' }}>
        </View>
    </TouchableOpacity>
)
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
                tabBarShowLabel: false,
                headerTitleAlign: 'center',
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'black',
                tabBarIndicatorStyle: {
                    width: 0, height: 0, elevation: 0,
                },
                tabBarIconStyle: { width: 60, justifyContent: 'center', top: 20 },
                tabBarContentContainerStyle: {
                    height: 80,
                    justifyContent: 'space-between'
                },
            }}
            tabBarPosition='bottom'
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="home" size={20} color={color} />
                            <Text style={{ fontSize: 10, color: color, paddingTop: 2 }}>TRANG CHỦ</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="news"
                component={News}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Icon2 name="newspaper-o" size={20} color={color} />
                            <Text style={{ fontSize: 10, color: color, paddingTop: 2 }}>TIN TỨC</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="test"
                component={News}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <CustomButtonTab />
                    ),
                    tabBarIconStyle: { width: 60, justifyContent: 'center', alignItems: 'center', top: 18 },
                    
                }}
            />
            <Tab.Screen
                name="thongbao"
                component={News}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Icon1 name="notifications-outline" size={20} color={color} />
                            <Text style={{ fontSize: 10, color: color, paddingTop: 2 }}>THÔNG BÁO</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="canhan"
                component={Personal}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Icon1 name="person-outline" size={20} color={color} />
                            <Text style={{ fontSize: 10, color: color, paddingTop: 2 }}>CÁ NHÂN</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
export default TabNavigator;