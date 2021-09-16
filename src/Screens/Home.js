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
                        <Text style={styles.text_header}>Trang chủ</Text>
                    </View>
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={styles.footer}
                    >
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