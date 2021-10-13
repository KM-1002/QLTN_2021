import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
    Button,
    Image,
    ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import auth from '@react-native-firebase/auth';
import QRCode from 'react-native-qrcode-svg';
import firestore from '@react-native-firebase/firestore';
import AvatarView from '../Components/avatarView';

const Home = ({ navigation }) => {
    const user = auth().currentUser;
    const [data, setdata] = useState([])
    const signOut = () => {
        auth().signOut()
    }

    useEffect(() => {
        setdata(user.uid)
    }, [])
    const ScanQR = () => {
        navigation.navigate('qrscan')
    }
    return (
        <View style={styles.container}>
                <StatusBar backgroundColor='#00cfcb' barStyle="light-content" />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <View style={styles.userDisplay}>
                                <View style={{ height: 80, width: 80, borderRadius: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8E8E8' }}>
                                    <AvatarView size={65} viewPress={() => navigation.navigate('infor')} />
                                </View>
                                <View style={{ paddingLeft: 15 }}>
                                    <Text style={{ fontSize: 20, color: 'white' }}>Xin chào,</Text>
                                    <Text style={styles.text_header}>{auth().currentUser.displayName}</Text>
                                </View>
                            </View>
                        </View>
                        <Animatable.View
                            style={styles.footer}>
                            <Button title="đăng xuất" onPress={signOut} />
                            <View>
                                <QRCode
                                    value={data}
                                />
                            </View>
                        </Animatable.View>
                    </View>
                </TouchableWithoutFeedback>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00cfcb'
    },
    header: {
        flex: 1 / 1.5,
        paddingHorizontal: 15,
        paddingBottom: 5,
        justifyContent: 'center'
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 5,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop: 10
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        paddingLeft: 20,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        paddingHorizontal: 20,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 15,
    },
    button: {
        alignItems: 'center',
        marginTop: 20
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    userDisplay: {
        flexDirection: 'row'
    }
});