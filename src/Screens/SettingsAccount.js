import React, { useState, useEffect } from 'react';
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
    Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';


function ForgotPassword(props) {
    return (<View style={{paddingTop:'10%'}}>
        <Text style={styles.textTitle}>Quên mật khẩu?</Text>
        <Text style={styles.textSub}>Nhập tài khoản email đã đăng ký </Text>
        <View style={styles.Box}>
            <Feather name="mail" color="#FF4162" size={20} />
            <TextInput style={styles.textInput} placeholder="Nhập địa chỉ email" onChangeText={input => props.setemail(input)} autoCapitalize="none">
            </TextInput>
        </View>
        <TouchableOpacity onPress={props.resetPassword}>
            <LinearGradient style={styles.Button} colors={['#2eff85', '#01ab9d', '#42e3d4']}>
                <Text style={{
                    fontSize: 16,
                    color: '#fff',
                    fontWeight: 'bold'
                }}>Đặt lại mật khẩu</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>);
}
function ChangePassword(props) {
    return (<View>
        <Text>Đổi mật khẩu</Text>
    </View>);
}


const SettingsAccount = ({ navigation, route }) => {
    const [email, setemail] = useState('')
    const [typeSetting, settypeSetting] = useState('')
    const { option } = route.params;

    useEffect(() => {
        if (option) {
            switch (option) {
                case '1':
                    settypeSetting('1');
                    console.log(typeSetting)
                    break;
                case '2':
                    settypeSetting('2');
                    break;
                default: settypeSetting('1')
            }
        }
    }, [option, typeSetting])
    const resetPassword = async () => {
        if (email) {
            try {
                await auth().sendPasswordResetEmail(email);
                Alert.alert('Thông báo', 'Chúng tôi đã gửi link reset mật khẩu đến email của bạn, vui lòng kiểm tra hộp thư hoặc thư rác.')
            } catch (e) {
                console.log(e)
                if (e.code == 'auth/user-not-found') {
                    alert('Email này chưa được đăng ký.')
                }
            }
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#00cfcb' barStyle="light-content" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image
                            source={require('../res/Images/logo.png')}
                            style={styles.logo}
                            resizeMode="stretch" />
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.content}>
                            <KeyboardAwareScrollView
                                extraHeight={'20%'}
                                enableOnAndroid
                                showsVerticalScrollIndicator={false}
                            >
                                {
                                    (typeSetting == '1') ?
                                        <ForgotPassword setemail={setemail} resetPassword={resetPassword} />
                                        :
                                        <ChangePassword />
                                }
                            </KeyboardAwareScrollView>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default SettingsAccount;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.15;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00cfcb'
    },
    header: {
        flex: 1.25,
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
        paddingTop: '10%'
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
        borderColor: '#01ab9d',
        alignItems: 'center',
        marginHorizontal: 60,
        paddingVertical: 15,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
    }
});