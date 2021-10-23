import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Badge, Surface, Title } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ListItem from '../Components/ListViewItem'
import Fontisto from 'react-native-vector-icons/Fontisto'

const Settings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={{ paddingTop: 25, paddingLeft: 15 }}>
                    <ListItem
                        icon1={<Image style={{ width: 28, height: 28 }} source={require('../res/Images/icon/fingerprint-scan.png')} />}
                        icon2={'keyboard-arrow-right'} size2={28} text={'Đăng nhập bằng vân tay'}
                        separatorLine
                    />
                    <ListItem
                        icon1={<Fontisto name={'locked'} color={'grey'} size={28} />}
                        icon2={'keyboard-arrow-right'} size2={28} text={'Đổi mật khẩu'}
                        separatorLine
                        onPress={() => navigation.navigate('settingsAccount', { option: '2' })}
                    />
                    <ListItem
                        icon1={<FontAwesome name={'language'} color={'grey'} size={28} />}
                        icon2={'keyboard-arrow-right'} size2={28} text={'Ngôn ngữ'}
                        separatorLine
                    />
                </View>
            </View>
        </View>
    )
}
export default Settings
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00cfcb',
    },
    body: {
        height: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }
})