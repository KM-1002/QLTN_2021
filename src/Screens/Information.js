import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker'
import { Picker } from '@react-native-picker/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Information = ({ navigation, route }) => {
    const [name, setname] = useState('')
    const [sex, setSex] = useState('')
    const [date, setdate] = useState(new Date(Date.now()))
    const [sdt, setsdt] = useState('')
    const [isPickerShow, setIsPickerShow] = useState(false);
    const { mathe, namsinh } = route.params ? route.params : '';
    useEffect(() => {
        console.log(mathe)
        console.log(namsinh)
        return () => {
        }
    }, [mathe])
    const showPicker = () => {
        setIsPickerShow(true);
    }
    const hideDatePicker = () => {
        setIsPickerShow(false);
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#00cfcb' barStyle="light-content" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.header}>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.content}>
                            <KeyboardAwareScrollView
                                extraHeight={120}
                                enableOnAndroid
                                showsVerticalScrollIndicator={false}
                            >
                                <View style={styles.box}>
                                    <Text style={styles.titlebox}>Thông tin cá nhân</Text>
                                    <View>
                                        <Text style={styles.texttitle}>Họ và tên (*)</Text>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder={'Nhập họ và tên...'}
                                            onChangeText={(input) => setname(input)}
                                        />
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', marginVertical: 3, justifyContent: 'center' }}>
                                        <View style={{ flex: 3, }}>
                                            <Text style={styles.texttitle}>Ngày tháng năm sinh (*)</Text>
                                            <TouchableOpacity
                                                onPress={() => showPicker()}
                                            >
                                                <Text style={styles.textTimeInput}>{date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}</Text>
                                            </TouchableOpacity>
                                            <DatePicker
                                                modal
                                                mode='date'
                                                locale='vi'
                                                maximumDate={new Date(Date.now())}
                                                androidVariant='nativeAndroid'
                                                title="Nhập ngày tháng năm sinh"
                                                confirmText="Xác nhận"
                                                cancelText="Huỷ bỏ"
                                                open={isPickerShow}
                                                date={date}
                                                onConfirm={(date) => {
                                                    hideDatePicker()
                                                    setdate(date)
                                                    console.log(date)
                                                }}
                                                onCancel={() => {
                                                    hideDatePicker()
                                                }}
                                            />
                                        </View>
                                        <View style={{ flex: 2.5, paddingLeft: '5%', justifyContent: 'center', }}>
                                            <Text style={[styles.texttitle]}>Giới tính (*)</Text>
                                            <View
                                                style={{
                                                    borderWidth: 1,
                                                    borderRadius: 5,
                                                    marginTop: 7,
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Picker
                                                    style={{ height: 48.125 }}
                                                    itemStyle={{ backgroundColor: "grey" }}
                                                    mode={'dropdown'}
                                                    selectedValue={sex}
                                                    onValueChange={(itemValue, itemIndex) => setSex(itemValue)}
                                                >
                                                    <Picker.Item style={{ fontSize: 17 }} label="Nam" value="Nam" />
                                                    <Picker.Item style={{ fontSize: 17 }} label="Nữ" value="Nữ" />
                                                    <Picker.Item style={{ fontSize: 17 }} label="Khác" value="Khác" />
                                                </Picker>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.texttitle}>Số điện thoại (*)</Text>
                                        <TextInput
                                            style={styles.textInput}
                                            placeholder={'Nhập số điện thoại...'}
                                            keyboardType={'phone-pad'}
                                            onChangeText={(input) => setsdt(input)}
                                            maxLength={10}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.texttitle}>Sổ hộ chiếu/CMND/CCCD (*)</Text>
                                        <TextInput
                                            style={styles.textInput}
                                            onChangeText={(input) => setsdt(input)}
                                            maxLength={12}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.texttitle}>Mã bảo hiểm y tế</Text>
                                        <View style={styles.boxmbhyt}>
                                            <TextInput style={styles.textMbhInput}></TextInput>
                                            <TouchableOpacity
                                                style={styles.btnQrText}
                                                onPress={() => navigation.navigate('qrscan', { option: 'bhyt' })}
                                            >
                                                <MaterialIcons
                                                    name="qr-code"
                                                    color="#000"
                                                    size={30}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View>

                                    </View>
                                    <View>

                                    </View>
                                </View>
                            </KeyboardAwareScrollView>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default Information;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00cfcb'
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
    content: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        paddingVertical: 10,
    },
    box: {
        paddingHorizontal: '1%',
    },
    titlebox: {
        marginVertical: '2%',
        fontWeight: 'bold',
        borderBottomWidth: 1,
        paddingBottom: '2%',
        fontSize: 16,
    },
    texttitle: {
        marginTop: '2%',
        fontSize: 15,
    },
    textInput: {
        marginVertical: 5,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 17,
    },
    textTimeInput: {
        height: 50,
        marginTop: 7,
        paddingLeft: 15,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 17,
        textAlignVertical: "center"
    },
    boxmbhyt: {
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: 5,
        marginTop: 5,
    },
    textMbhInput: {
        flex: 1,
        paddingLeft: 15,
        fontSize: 16,
    },
    btnQrText: {
        justifyContent: 'center',
        padding: 5,
    }

});