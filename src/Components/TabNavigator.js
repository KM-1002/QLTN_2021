import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/Home";
import News from "../Screens/News";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Personal from '../Screens/Personal';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

const Tab = createBottomTabNavigator();

const CustomButtonTab = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -30, justifyContent: 'center', alignItems: 'center', width: 75,
            height: 75,
            borderRadius: 75 / 2,
            backgroundColor: 'white'
        }}
        onPress={onPress}
    >
        <View>
            {children}
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
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={require('../res/Images/quetQr.png')}
                            resizeMode='contain'
                            style={{
                                width: 70,
                                height: 70,
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomButtonTab {...props} />
                    )
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