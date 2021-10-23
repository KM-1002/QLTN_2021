import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Dimensions,
} from 'react-native';
import AppHeader from '../Components/AppHeader';
import auth from '@react-native-firebase/auth';
import QRCode from 'react-native-qrcode-svg';
import ListItem from '../Components/ListViewItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const QrcodeView = ({ navigation }) => {

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
const Personal = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>
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
                        avatarPress={() => navigation.navigate('infor')}
                    />
                    <View style={styles.body}>
                        <View style={{ paddingTop: 25, paddingLeft: 15 }}>
                            <ListItem
                                icon1={<Ionicons name={'md-person'} color={'grey'} size={28} />}
                                icon2={'keyboard-arrow-right'} size2={30} text={'Thông tin cá nhân'}
                                separatorLine
                                onPress={() => navigation.navigate('infor')}
                            />
                            <ListItem
                                icon1={<MaterialCommunityIcons name={'account-group'} color={'grey'} size={30} />}
                                icon2={'keyboard-arrow-right'} size2={30} text={'Cộng đồng'} separatorLine
                            />
                            <ListItem
                                icon1={<Ionicons name={'location-sharp'} color={'grey'} size={30} />}
                                icon2={'keyboard-arrow-right'} size2={30} text={'Nơi đã đến'} separatorLine
                            />
                            <ListItem
                                icon1={<MaterialCommunityIcons name={'calendar-edit'} color={'grey'} size={30} />}
                                icon2={'keyboard-arrow-right'} size1={28} size2={30} text={'Lịch sử đăng ký'} separatorLine
                            />
                            <ListItem
                                icon1={<Ionicons name={'calendar'} color={'grey'} size={30} />}
                                icon2={'keyboard-arrow-right'} size1={28} size2={30} text={'Lịch hẹn'} separatorLine
                            />
                            <ListItem
                                icon1={<Entypo name={'info-with-circle'} color={'grey'} size={30} />}
                                icon2={'keyboard-arrow-right'} size1={28} size2={30} text={'Giới thiệu'} separatorLine
                            />
                            <ListItem
                                icon1={<Ionicons name={'md-settings'} color={'grey'} size={32} />}
                                icon2={'keyboard-arrow-right'} size1={28} size2={30} text={'Cài đặt'}
                                separatorLine
                                onPress={() => navigation.navigate('settings')}
                            />
                            <ListItem
                                icon1={<MaterialIcons name={'logout'}
                                    color={'grey'} size={30} />}
                                size1={28} text={'Đăng xuất'} separatorLine
                                onPress={() => auth().signOut()}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Personal
const height = Dimensions.get("screen").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00cfcb',
        //  borderWidth: 2,
    },
    header: {
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 0,
    },
    containHeader: {
        flexDirection: 'column',
        height: height / 2.8,
        elevation: 0,
        justifyContent: 'flex-start',
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
    },
    body: {
        backgroundColor: 'white',
        /// flex: 1 - 1 / 2.3,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 600,
    }
})