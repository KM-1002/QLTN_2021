import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet
} from 'react-native';
import AppHeader from '../Components/AppHeader';
import auth from '@react-native-firebase/auth';
import QRCode from 'react-native-qrcode-svg';

const QrcodeView = ({ children }) => {
    return (
        <View View style={{
            backgroundColor: 'white',
            borderRadius: 10,
            height: 140,
            width: 140,
            justifyContent: "center",
            alignItems: 'center',
        }}>
            <QRCode
                size={120}
                value="http://awesome.link.qr"
            />
        </View>
    )
}
const TextItem = () => {
    return (
        <View style={{ paddingTop: 10 }}>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Mã số sức khoẻ</Text>
        </View>
    )
}
const Personal = ({ navigation, props }) => {
    return (
        <AppHeader
            title={"Cá nhân"}
            headerBg={"#00cfcb"}
            iconColor={"white"}
            avatar
            right={"logout"}
            onRightPress={() => auth().signOut()}
            headerItemStyle={styles.header}
            styleContainer={styles.containHeader}
            itemMiddle
            middleItemStyle={styles.middleStyle}
            middleItemView={<QrcodeView />}
            itemText={<TextItem />}
        />
    )
}
export default Personal
const styles = StyleSheet.create({
    header: {
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 0,
    },
    containHeader: {
        flexDirection: 'column',
        height: 300,
        elevation: 8,
        justifyContent: 'flex-start'
    },
    middleStyle: {
        height: 180,
        width: 140,
        marginTop: 20,
        alignItems: 'center',
    },
    qrCodeStyle: {
        height: 170,
        width: 140,
    }
})