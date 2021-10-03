import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    LogBox
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
LogBox.ignoreAllLogs();
const SplashScreen = ({ navigation }) => {
    const { colors } = useTheme();
    useEffect(() => {
<<<<<<< HEAD
        const delay = setTimeout(() => {
=======
        setTimeout(() => {
>>>>>>> 5063d505bdc132bc772749ebfca4f17ca1e0c5aa
            const subscriber = auth().onAuthStateChanged(
                function onAuthStateChanged(user) {
                    const timeRequest = setInterval(() => {
                        if (user) { auth().currentUser.reload(); user.reload() };
                        if (user && user.emailVerified) {
                            navigation.replace('menu')
<<<<<<< HEAD
                            clearInterval(timeRequest)
=======
                            clearInterval(timeRequest)  
>>>>>>> 5063d505bdc132bc772749ebfca4f17ca1e0c5aa
                        }
                        else if (user && !user.emailVerified) {
                            console.log('chưa xác minh email')
                            clearInterval(timeRequest)
                            navigation.replace('signup', { show: true })
                        }
                        else if (!user) {
                            clearInterval(timeRequest)
                            navigation.replace('signin')
                            console.log(user)
                        }
                    }, 1000);
<<<<<<< HEAD
                    return () => {
                        clearInterval(timeRequest)
                    }
                });
            return () => {
                subscriber
            }  // unsubscribe on unmount
        }, 1000);
        return () => {
            clearTimeout(delay)
        }
=======
                });
            return subscriber; // unsubscribe on unmount
        }, 1000);
>>>>>>> 5063d505bdc132bc772749ebfca4f17ca1e0c5aa
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#00cfcb' barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../Images/logo.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
                animation="fadeInUpBig"
            >
                <Text style={[styles.title, {
                    color: colors.text
                }]}>Chào mừng đến với QLNT!</Text>
                <Text style={styles.text}>Đăng nhập ngay với tài khoản</Text>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <LinearGradient
                            colors={['#08d4c4', '#00cfcb']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Bắt đầu ngay</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="#fff"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </SafeAreaView>
    );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00cfcb'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});