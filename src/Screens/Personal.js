import React, { useState, useEffect } from 'react';
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
import AppHeader from '../Components/AppHeader';
import auth from '@react-native-firebase/auth';

const Personal = ({ navigation }) => {
    return (
        <AppHeader
            title={"Cá nhân"}
            headerBg={"#00cfcb"}
            iconColor={"white"}
            optionalBadge={5}
            avatar
            right={"logout"}
            onRightPress={()=> auth().signOut()}
            navigation={navigation}
        />
    )
}
export default Personal