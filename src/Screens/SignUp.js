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
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';

const SingUp = ({ navigation }) => {

    const [data, setData] = useState({
        username: '',
        password: '',
        repassword: '',
    });
    const [check_textInputChange, setcheck_textInputChange] = useState(false)

    const updateSecureTextEntry = () => {
        setcheck_textInputChange({
            secureTextEntry: !check_textInputChange.secureTextEntry
        });
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#00cfcb' barStyle="light-content" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Animatable.Image
                            animation="fadeInDown"
                            source={require('../Images/logo.png')}
                            style={styles.logo}
                            resizeMode="stretch"
                        />
                        <Text style={styles.text_header}>Đăng ký ngay!</Text>
                    </View>
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={styles.footer}
                    >
                        <KeyboardAwareScrollView
                            extraHeight={150}
                            enableOnAndroid
                            showsVerticalScrollIndicator={false}
                        >
                            <Text style={styles.text_footer}>Email</Text>
                            <View style={styles.action}>
                                <FontAwesome
                                    name="user-o"
                                    color="#05375a"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Nhập tài khoản email"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                />
                                {data.check_textInputChange ?
                                    <Animatable.View
                                        animation="bounceIn"
                                    >
                                        <Feather
                                            name="check-circle"
                                            color="green"
                                            size={20}
                                        />
                                    </Animatable.View>
                                    : null}
                            </View>

                            <Text style={[styles.text_footer, {
                            }]}>Mật khẩu</Text>
                            <View style={styles.action}>
                                <Feather
                                    name="lock"
                                    color="#05375a"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Nhập mật khẩu"
                                    secureTextEntry={check_textInputChange.secureTextEntry ? false : true}
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                />
                                <TouchableOpacity
                                    onPress={updateSecureTextEntry}
                                >
                                    {check_textInputChange.secureTextEntry ?
                                        <Feather
                                            name="eye"
                                            color="green"
                                            size={20}
                                        />
                                        :
                                        <Feather
                                            name="eye-off"
                                            color="grey"
                                            size={20}
                                        />
                                    }
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.text_footer}>Nhập lại mật khẩu</Text>
                            <View style={styles.action}>
                                <Feather
                                    name="lock"
                                    color="#05375a"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Nhập lại mật khẩu"
                                    secureTextEntry={check_textInputChange.secureTextEntry ? false : true}
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                />
                            </View>
                            <Text style={styles.text_footer}>Số điện thoại</Text>
                            <View style={styles.action}>
                                <Feather
                                    name="phone-call"
                                    color="#05375a"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Nhập số điện thoại"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                />
                            </View>
                            <View style={styles.button}>
                                <TouchableOpacity
                                    style={styles.signIn}
                                    onPress={() => { }}
                                >
                                    <LinearGradient
                                        colors={['#08d4c4', '#01ab9d']}
                                        style={styles.signIn}
                                    >
                                        <Text style={[styles.textSign, {
                                            color: '#fff'
                                        }]}>Sign Up</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => navigation.goBack('signin')}
                                    style={{
                                        marginTop: 15
                                    }}
                                >
                                    <Text style={[styles.textSign, {
                                        color: '#01ab9d'
                                    }]}>Bạn đã có tài khoản</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAwareScrollView>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default SingUp;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.15;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00cfcb'
    },
    header: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 5
    },
    logo: {
        marginLeft: height_logo * 1,
        width: height_logo,
        height: height_logo,
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
        paddingVertical: 10,
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
});