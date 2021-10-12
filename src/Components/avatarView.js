
import React from "react";
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
export default function AvatarView({ ImageUrl, containerStyle, size, iconPress, avatarStyle, icon, viewPress }) {
    icon ? icon : false;
    const sizes = size ? size : 100
    const onPessIcon = () => {
        if (!iconPress)
            iconPress = console.log('no function')
        else iconPress()
    }
    const onPressView = () => {
        if (!viewPress)
            viewPress = console.log('no function')
        else viewPress()
    }
    return (
        <View style={{
            flexDirection: 'column',
            width: sizes,
            height: sizes,
        },
            containerStyle
        }>
            <View style={{ borderRadius: sizes / 2 }}>
                <TouchableOpacity onPress={onPressView}>
                    <Image style={{
                        width: sizes,
                        height: sizes,
                        borderRadius: sizes / 2,
                    }
                    }
                        source={{
                            uri: ImageUrl ? ImageUrl : "https://firebasestorage.googleapis.com/v0/b/qltn-71213.appspot.com/o/avatar.jpg?alt=media&token=ecb0dce8-17f5-441f-8a4b-2e70043b772f"
                        }} />
                </TouchableOpacity>
            </View>
            {icon ? <View style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor: '#3a3b3c',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                right: 10,
                bottom: 20
            }}>

                <TouchableOpacity onPress={onPessIcon}>
                    <Feather name='camera' size={20} color='white' />
                </TouchableOpacity>
            </View>
                :
                null
            }

        </View>);
}