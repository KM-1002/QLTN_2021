import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const ListItem = ({ icon1, icon2, size2, text, separatorLine, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.item}>
                        {icon1}
                        <Text style={{ paddingLeft: 10 }}>{text}</Text>
                    </View>
                    <View style={{ paddingRight: 15 }}>
                        {icon2 && <MaterialIcons name={icon2} color={'grey'} size={size2} />
                        }
                    </View>
                </View>
                {separatorLine && <View style={styles.separatorLine}></View>}
            </View>
        </TouchableOpacity>
    )
}

export default ListItem
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        marginTop: 15
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    separatorLine: {
        borderBottomWidth: 0.3,
        marginTop: 15,
    }
})