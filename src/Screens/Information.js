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
    SafeAreaView,
} from 'react-native';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker'
import { Picker } from '@react-native-picker/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Information = ({ navigation, route }) => {
    const [name, setname] = useState('')
    const [sex, setSex] = useState('')
    const [date, setDate] = useState(new Date())
    const [datebd, setDatebd] = useState(new Date())
    const [sdt, setsdt] = useState('')
    const [open, setOpen] = useState(false)
    const [pickerbd, setpickerbd] = useState(false)
    const [cmnd, setcmnd] = useState('')
    const [chieucao, setchieucao] = useState('');
    const [cannang, setcannang] = useState('');
    const [mabaohiem, setMabaohiem] = useState()
    const [nhommau, setnhommau] = useState('');
    const { mathe, ngaybd } = route.params ? route.params : '';
    useEffect(() => {
        if (mathe, ngaybd) {
            setMabaohiem(mathe)
            let d = ngaybd.split('/');
            let e = d[2] + '/' + d[1] + '/' + d[0];
            setngaybatdau(new Date(e))
        }
        return () => {
        }
    }, [mathe, ngaybd])
    const BMI = () => {
        if (chieucao > 0 && cannang > 0) {
            return (cannang / ((chieucao / 100) * (chieucao / 100))).toFixed(1);
        }
    };
    const onChangeTextCC = (text) => {
        if (Number.isInteger(+text)) {
            setchieucao(text)
        }
    }
    const onChangeTextCN = (text) => {
        if (Number.isInteger(+text)) {
            setcannang(text)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#00cfcb' barStyle="light-content" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.header}>
                    </View>
                    <View style={styles.footer}>
                        <KeyboardAwareScrollView
                            style={styles.content}
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
                                        placeholder={'Họ và tên...'}
                                        onChangeText={(input) => setname(input)}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={{ flex: 3, }}>
                                        <Text style={styles.texttitle}>Ngày tháng năm sinh (*)</Text>
                                        <TouchableOpacity
                                            onPress={() => setOpen(true)}
                                        >
                                            <Text style={styles.textTimeInput}>{date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}</Text>
                                        </TouchableOpacity>
                                        <DatePicker
                                            modal
                                            mode='date'
                                            locale='vi'
                                            maximumDate={new Date(Date.now())}
                                            androidVariant='nativeAndroid'
                                            title="Ngày tháng năm sinh"
                                            confirmText="Xác nhận"
                                            cancelText="Huỷ bỏ"
                                            open={open}
                                            date={date}
                                            onConfirm={(date) => {
                                                setOpen(false)
                                                setDate(date)
                                            }}
                                            onCancel={() => {
                                                setOpen(false)
                                            }}
                                        />
                                    </View>
                                    <View style={{ flex: 2, paddingLeft: 20 }}>
                                        <Text style={[styles.texttitle]}>Giới tính (*)</Text>
                                        <View
                                            style={{
                                                marginTop: '5.75%',
                                                borderWidth: 1,
                                                justifyContent: 'center',
                                                borderRadius: 5,
                                                height: 49.75
                                            }}
                                        >
                                            <Picker
                                                mode={'dropdown'}
                                                selectedValue={sex}
                                                onValueChange={(itemValue, itemIndex) => setSex(itemValue)}
                                            >
                                                <Picker.Item style={{ fontSize: 17 }} label="Nam" value="Nam" />
                                                <Picker.Item style={{ fontSize: 17, borderBottomWidth: 1 }} label="Nữ" value="Nữ" />
                                                <Picker.Item style={{ fontSize: 17, borderBottomWidth: 1 }} label="Khác" value="Khác" />
                                            </Picker>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={[styles.texttitle, { marginTop: 13 }]}>Số điện thoại (*)</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={'Số điện thoại...'}
                                        keyboardType={'phone-pad'}
                                        onChangeText={(input) => setsdt(input)}
                                        maxLength={10}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.texttitle}>Sổ hộ chiếu/CMND/CCCD (*)</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        onChangeText={(input) => setcmnd(input)}
                                        maxLength={12}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.texttitle} >Mã bảo hiểm y tế</Text>
                                    <View style={styles.boxmbhyt}>
                                        <TextInput style={styles.textMbhInput} onChangeText={(input) => { setMabaohiem(input) }}>{mabaohiem ? mabaohiem : ''}</TextInput>
                                        <TouchableOpacity
                                            style={styles.btnQrText}
                                            onPress={() => navigation.navigate('qrscan', {
                                                option: 'bhyt'
                                            })}
                                        >
                                            <MaterialIcons
                                                name="qr-code"
                                                color="#000"
                                                size={30}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={{ flex: 2, }}>
                                        <Text style={styles.texttitle}>Giá trị sử dụng từ ngày</Text>
                                        <TouchableOpacity
                                            onPress={() => setOpen(true)}
                                        >
                                            <Text style={styles.textTimeInput}></Text>
                                        </TouchableOpacity>
                                        <DatePicker
                                            modal
                                            mode='date'
                                            locale='vi'
                                            maximumDate={new Date(Date.now())}
                                            androidVariant='nativeAndroid'
                                            title="Ngày tháng năm sinh"
                                            confirmText="Xác nhận"
                                            cancelText="Huỷ bỏ"
                                            open={open}
                                            date={date}
                                            onConfirm={(date) => {
                                                setOpen(false)
                                                setDatebd(date)
                                            }}
                                            onCancel={() => {
                                                setOpen(false)
                                            }}
                                        />
                                    </View>
                                    <View style={{ flex: 2,paddingLeft:20 }}>
                                        <Text style={styles.texttitle}>Đến ngày</Text>
                                        <TouchableOpacity
                                            onPress={() => setpickerbd(true)}
                                        >
                                            <Text style={styles.textTimeInput}></Text>
                                        </TouchableOpacity>
                                        <DatePicker
                                            modal
                                            mode='date'
                                            locale='vi'
                                            maximumDate={new Date(Date.now())}
                                            androidVariant='nativeAndroid'
                                            title="Ngày tháng năm sinh"
                                            confirmText="Xác nhận"
                                            cancelText="Huỷ bỏ"
                                            open={pickerbd}
                                            date={datebd}
                                            onConfirm={(datebd) => {
                                                setpickerbd(false)
                                                setDatebd(datebd)
                                            }}
                                            onCancel={() => {
                                                setpickerbd(false)
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={styles.box}>
                                    <Text style={[styles.titlebox, { marginTop: '5%' }]}>Sức khoẻ</Text>
                                    <View>
                                        <Text style={[styles.texttitle, { paddingBottom: '2%', }]}>Chỉ số sức khoẻ BMI</Text>
                                        <View style={{ flexDirection: 'row', }}>
                                            <View style={styles.boxBMI}>
                                                <TextInput
                                                    style={{ paddingLeft: 10, fontSize: 16 }}
                                                    keyboardType='number-pad'
                                                    placeholder={'Chiều cao cm'}
                                                    maxLength={4}
                                                    onChangeText={onChangeTextCC}
                                                />
                                            </View>
                                            <View style={[styles.boxBMI, { marginHorizontal: '4%' }]}>
                                                <TextInput
                                                    style={{ paddingLeft: 10, fontSize: 16 }}
                                                    keyboardType='number-pad'
                                                    placeholder={'Cân nặng kg'}
                                                    maxLength={5}
                                                    onChangeText={onChangeTextCN}
                                                />
                                            </View>
                                            <View style={[styles.boxBMI, { flex: 1.25 }]}>
                                                {
                                                    BMI() ?
                                                        <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
                                                            <Text style={{ fontSize: 16 }}>{BMI()}</Text>
                                                        </View>
                                                        :
                                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                            <Text style={{ fontSize: 16, color: '#A0A0A0' }}>Chỉ số BMI</Text>
                                                        </View>
                                                }
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={[styles.texttitle, { paddingBottom: '2%' }]}>Nhóm máu ABO</Text>
                                        <View
                                            style={{
                                                borderWidth: 1,
                                                borderRadius: 5,
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Picker
                                                style={{ height: 48.125 }}
                                                itemStyle={{ borderWidth: 1, }}
                                                mode={'dropdown'}
                                                selectedValue={nhommau}
                                                onValueChange={(itemValue, itemIndex) => setnhommau(itemValue)}
                                            >
                                                <Picker.Item style={{ fontSize: 17 }} label="Không xác định" value="Không xác định" />
                                                <Picker.Item style={{ fontSize: 17 }} label="O" value="O" />
                                                <Picker.Item style={{ fontSize: 17 }} label="AB" value="AB" />
                                                <Picker.Item style={{ fontSize: 17 }} label="A" value="A" />
                                                <Picker.Item style={{ fontSize: 17 }} label="B" value="B" />
                                            </Picker>
                                        </View>
                                        <View>
                                            <Text style={[styles.texttitle, { paddingBottom: '2%', }]}>Nhóm máu Rh</Text>
                                            <View
                                                style={{
                                                    borderWidth: 1,
                                                    borderRadius: 5,
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Picker
                                                    style={{ height: 48.125 }}
                                                    itemStyle={{ backgroundColor: "grey" }}
                                                    mode={'dropdown'}
                                                    selectedValue={nhommau}
                                                    onValueChange={(itemValue, itemIndex) => setnhommau(itemValue)}
                                                >
                                                    <Picker.Item style={{ fontSize: 17 }} label="Không xác định" value="Không xác định" />
                                                    <Picker.Item style={{ fontSize: 17 }} label="Rh+" value="Rh+" />
                                                    <Picker.Item style={{ fontSize: 17 }} label="Rh-" value="Rh-" />
                                                </Picker>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={styles.texttitle}>Tiền sử bệnh</Text>
                                            <TextInput
                                                style={[styles.textInput, { textAlignVertical: 'top' }]}
                                                placeholder={"Tiền sử bệnh"}
                                                numberOfLines={5}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </KeyboardAwareScrollView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
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
        paddingLeft: 15,
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
        alignItems: 'center',
        padding: 5,
    },
    boxBMI: {
        flex: 1.5,
        borderRadius: 5,
        borderWidth: 1,
    }


});