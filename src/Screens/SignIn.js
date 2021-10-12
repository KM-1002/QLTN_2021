import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Dimensions,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';

const SignIn = ({ navigation }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [check_textInputChange, setcheck_textInputChange] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const updateSecureTextEntry = () => {
        setcheck_textInputChange({
            secureTextEntry: !check_textInputChange.secureTextEntry
        });
    }

    const checkSignin = () => {
        if (username && password) {
            setLoading(true)
            auth().signInWithEmailAndPassword(username, password)
                .then(() => {
                    setLoading(false)
                })
                .catch((error) => {
                    var errorCode = error.code;
                    if (errorCode == "auth/user-disabled") {
                        Alert.alert('Opps!', 'Tài khoản của bạn đã bị khoá');
                    }
                    if (errorCode == "auth/network-request-failed") {
                        Alert.alert('Opps!', 'Không có kết nối Internet');
                    }
                    Alert.alert('Opps!', 'Email hoặc mật khẩu không đúng');
                    console.log(errorCode)
                });
        }
        else {
            Alert.alert('Opps!', 'Vui lòng nhập đầy đủ thông tin');
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#00cfcb' Style="light-content" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    {loading ?
                        <View style={styles.styleLoading}>
                            <ActivityIndicator size="large" color="#0000ff" />
                        </View>
                        : null}
                    <View style={styles.header}>
                        <Animatable.Image
                            animation="fadeInDown"
                            source={require('../Images/logo.png')}
                            style={styles.logo}
                            resizeMode="stretch"
                        />
                        <Text style={styles.text_header}>Đăng nhập ngay</Text>
                    </View>
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={styles.footer
                        }>
                        <View style={styles.content}>
                            <KeyboardAwareScrollView
                                extraHeight={150}
                                enableOnAndroid
                                showsVerticalScrollIndicator={false}>

                                <Text style={[styles.text_footer, {
                                }]}>Email</Text>
                                <View style={styles.action}>
                                    <FontAwesome
                                        name="user-o"
                                        color={'#05375a'}
                                        size={20}
                                    />
                                    <TextInput
                                        placeholder="Nhập tài khoản email"
                                        placeholderTextColor="#666666"
                                        style={styles.textInput}
                                        autoCapitalize="none"
                                        keyboardType="email-address"
                                        returnKeyType="next"
                                        onChangeText={(input) => setUsername(input)}
                                    />
                                </View>
                                <Text style={styles.text_footer}>Mật khẩu</Text>
                                <View style={styles.action}>
                                    <Feather
                                        name="lock"
                                        color={'#05375a'}
                                        size={20}
                                    />
                                    <TextInput
                                        placeholder="Nhập mật khẩu"
                                        placeholderTextColor="#666666"
                                        secureTextEntry={check_textInputChange.secureTextEntry ? false : true}
                                        style={styles.textInput}
                                        autoCapitalize="none"
                                        onChangeText={(input) => setPassword(input)}
                                    />
                                    <TouchableOpacity
                                        onPress={updateSecureTextEntry}>
                                        {check_textInputChange.secureTextEntry ?
                                            <Feather
                                                name="eye"
                                                size={20}
                                                color="green"
                                            />
                                            :
                                            <Feather
                                                size={20}
                                                name="eye-off"
                                                color="grey"
                                            />
                                        }
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => navigation.push('forgotpass')}>
                                    <Text style={{ color: '#009387', marginTop: 15, paddingLeft: 20 }}>Quên mật khẩu?</Text>
                                </TouchableOpacity>
                                <View style={styles.button}>
                                    <TouchableOpacity
                                        style={styles.signIn}
                                        onPress={checkSignin}>
                                        <LinearGradient
                                            colors={['#08d4c4', '#01ab9d']}
                                            style={styles.signIn}>
                                            <Text style={[styles.textSign, {
                                                color: '#F5F5F5'
                                            }]}>Đăng nhập</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('signup')}
                                        style={[styles.signIn, {
                                            borderColor: '#00cfcb',
                                            fontWeight: 'bold',
                                            marginTop: 15,
                                            borderWidth: 1,
                                        }]}
                                    >
                                        <Text style={[styles.textSign, {
                                            color: '#01ab9d',
                                        }]}>Đăng ký</Text>
                                    </TouchableOpacity>
                                </View>
                            </KeyboardAwareScrollView>
                        </View>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default SignIn;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.15;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00cfcb',
        justifyContent: 'flex-start'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
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
    content: {
        marginTop: 10,
        width: 370
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    text_footer: {
        paddingLeft: 20,
        color: '#05375a',
        fontSize: 18
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
        color: '#05375a',
        fontSize: 15,
        paddingLeft: 15,
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
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