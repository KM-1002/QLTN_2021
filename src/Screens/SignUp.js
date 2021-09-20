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
    TouchableWithoutFeedback,
    Keyboard,
    ActivityIndicator,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';

function VerifyScreen(props) {
    return (<View>
        <Text>Vui lòng kiểm tra Email và hộp thư rac</Text>
        <TouchableOpacity onPress={props.signOut}>
            <Text>Về trang chủ</Text>
        </TouchableOpacity>
    </View>);
}


const SingUp = ({ navigation, route }) => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [name, setname] = useState('')
    const [check_textInputChange, setcheck_textInputChange] = useState(false)
    const [showNext, setshowNext] = useState(false)
    const [loading, setLoading] = useState(false)
    const { show } = route.params ? route.params : false;

    useEffect(() => {
        setshowNext(show)
    }, [show])
    const updateSecureTextEntry = () => {
        setcheck_textInputChange({
            secureTextEntry: !check_textInputChange.secureTextEntry
        });
    }
    const signOut = () => {
        auth().signOut()
    }
    const checkRegister = () => {
        if (username && password && repassword && name) {
            if (password.length >= 6) {
                if (password === repassword) {
                    setLoading(true);
                    auth()
                        .createUserWithEmailAndPassword(username, password)
                        .then((userCentinal) => {
                            var user = userCentinal.user;
                            user.updateProfile({
                                displayName: name,
                            })
                                .then(async () => {
                                    await auth().currentUser.sendEmailVerification()
                                    setshowNext(true)
                                    setLoading(false)
                                })
                        })
                        .catch(error => {
                            setLoading(false)
                            if (error.code === 'auth/email-already-in-use') {
                                alert('Email đã được đăng ký')
                            }

                            if (error.code === 'auth/invalid-email') {
                                console.log('That email address is invalid!');
                            }
                            if (error.Code == "auth/network-request-failed") {
                                alert('Không có kết nối Internet');
                            }
                            console.error(error);
                        });
                }
                else {
                    console.log('pass déo giống');

                }
            }
            else {
                console.log('pass 6 ký tự');
            }
        }
        else {
            console.log('nhập déo đủ');
        }
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
                        <Text style={styles.text_header}>{showNext ? 'vãi cả lozz' : 'Đăng ký ngay!'} </Text>
                    </View>
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={styles.footer}>
                        <View style={styles.content}>
                            {loading ?
                                <View style={styles.styleLoading}>
                                    <ActivityIndicator size="large" color="#0000ff" />
                                </View>
                                : null}
                            {showNext ?
                                <VerifyScreen signOut={signOut}></VerifyScreen>
                                :
                                <KeyboardAwareScrollView
                                    extraHeight={150}
                                    enableOnAndroid
                                    showsVerticalScrollIndicator={false}>
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
                                            onChangeText={(input) => setusername(input)}
                                        />
                                    </View>
                                    <Text style={styles.text_footer}>Họ và tên</Text>
                                    <View style={styles.action}>
                                        <Feather
                                            name="pen-tool"
                                            color="#05375a"
                                            size={20}
                                        />
                                        <TextInput
                                            placeholder="Nhập họ và tên"
                                            style={styles.textInput}
                                            autoCapitalize="none"
                                            onChangeText={(input) => setname(input)}
                                        />
                                    </View>
                                    <Text style={styles.text_footer}>Mật khẩu</Text>
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
                                            onChangeText={(input) => setpassword(input)}
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
                                            onChangeText={(input) => setRepassword(input)}
                                        />
                                    </View>

                                    <View style={styles.button}>
                                        <TouchableOpacity
                                            style={styles.signIn}
                                            onPress={checkRegister}
                                        >
                                            <LinearGradient
                                                colors={['#08d4c4', '#01ab9d']}
                                                style={styles.signIn}
                                            >
                                                <Text style={[styles.textSign, {
                                                    color: '#fff'
                                                }]}>Đăng ký</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('signin')}
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
                            }

                        </View>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default SingUp;
const { height, width } = Dimensions.get("screen");
const height_logo = height * 0.15;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00cfcb'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1.1,
    },
    logo: {
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
    },

    content: {
        marginTop: 10,
        width: 370,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
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
        paddingHorizontal: 10,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 15,
        color: '#05375a',
        fontSize: 15,
    },
    button: {
        alignItems: 'center',
        marginTop: 20,
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
    styleLoading: {
        position: "absolute",
        zIndex: 1,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5FCFF88",
        paddingBottom: '30%'
    }
});