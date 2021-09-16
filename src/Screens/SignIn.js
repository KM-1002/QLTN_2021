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
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
const SignIn = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
    });
    const [check_textInputChange, setcheck_textInputChange] = useState(false);

    const updateSecureTextEntry = () => {
        setcheck_textInputChange({
            secureTextEntry: !check_textInputChange.secureTextEntry
        });
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#00cfcb' Style="light-content" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Animatable.Image
                            animation="fadeInDown"
                            source={require('../Images/logo.png')}
                            style={styles.logo}
                            resizeMode="stretch"
                        />
                        <Text style={styles.text_header}>Đăng nhập ngay!</Text>
                    </View>
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={styles.footer
                        }>
                        <KeyboardAwareScrollView
                            extraHeight={150}
                            enableOnAndroid
                            showsVerticalScrollIndicator={false}
                        >
                            <Text style={[styles.text_footer, {
                            }]}>Email</Text>
                            <View style={styles.action}>
                                <FontAwesome
                                    name="user-o"
                                    color={'#fff'}
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Nhập tài khoản email"
                                    placeholderTextColor="#666666"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                />
                            </View>
                            <Text style={styles.text_footer}>Mật khẩu</Text>
                            <View style={styles.action}>
                                <Feather
                                    name="lock"
                                    color={'#fff'}
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Nhập mật khẩu"
                                    placeholderTextColor="#666666"
                                    secureTextEntry={check_textInputChange.secureTextEntry ? false : true}
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                />
                                <TouchableOpacity
                                    onPress={updateSecureTextEntry}
                                >
                                    {check_textInputChange.secureTextEntry ?
                                        <Feather
                                            name="eye-off"
                                            color="grey"
                                            size={20}
                                        />
                                        :
                                        <Feather
                                            name="eye"
                                            color="green"
                                            size={20}
                                        />
                                    }
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <Text style={{ color: '#009387', marginTop: 15, paddingLeft: 20 }}>Quên mật khẩu?</Text>
                            </TouchableOpacity>
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
        backgroundColor: '#00cfcb'
    },
    header: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    logo: {
        marginLeft: height_logo * 1,
        width: height_logo,
        height: height_logo,
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    text_header: {
        flex: 1,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 10,
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
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#05375a',
        fontSize: 15,
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
    }
});