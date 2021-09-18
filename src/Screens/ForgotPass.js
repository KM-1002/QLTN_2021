import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    Dimensions,
    StatusBar,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    ToastAndroid,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-simple-toast';
const ForgotPass = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#00cfcb' barStyle="light-content" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image
                            source={require('../Images/logo.png')}
                            style={styles.logo}
                            resizeMode="stretch"
                        />
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.content}>
                            <KeyboardAwareScrollView
                                extraHeight={150}
                                enableOnAndroid
                                showsVerticalScrollIndicator={false}
                            >
                                <Text style={styles.textTitle}>Quên mật khẩu?</Text>
                                <Text style={styles.textSub}>Nhập tài khoản email đã đăng ký của bạn</Text>
                                <View style={styles.Box}>
                                    <Feather
                                        name="mail"
                                        color="#FF4162"
                                        size={20}
                                    />
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Nhập địa chỉ email"
                                        autoCapitalize="none">
                                    </TextInput>
                                </View>
                                <TouchableOpacity
                                     onPress={() => {Toast.show("Chúng tôi đã gửi hướng dẫn thay đổi mật khẩu đến email của bạn, vui lòng kiểm tra hộp thư cũng như thư rác của bạn.", Toast.LONG)}}>
                                    <LinearGradient
                                        style={styles.Button}
                                        colors={['#2eff85', '#01ab9d','#42e3d4']}
                                    >
                                    <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>Đặt lại mật khẩu</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </KeyboardAwareScrollView>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default ForgotPass;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.15;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00cfcb'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
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
    logo: {
        marginLeft: height_logo * 1,
        width: height_logo,
        height: height_logo,
    },
    textTitle: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 35,
        marginVertical: 10,
        textAlign: 'center',
    },
    textSub: {
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 70,
        fontSize: 16,
        color: '#585858',
    },
    content: {
        paddingTop: '25%'
    },
    Box: {
        flexDirection: 'row',
        borderColor: '#ff3056',
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        paddingLeft: 15
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -3,
        color: '#05375a',
        fontSize: 17,
        marginHorizontal: 8
    },
    Button: {
        marginTop: 25,
        borderWidth: 1,
        borderColor:'#01ab9d',
        alignItems: 'center',
        marginHorizontal: 60,
        paddingVertical: 15,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
    }
});