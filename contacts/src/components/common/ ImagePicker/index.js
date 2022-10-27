import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import RBSheet from 'react-native-raw-bottom-sheet'
import colors from '../../../assets/themes/colors'
import Icon from '../Icon'

const ImagePicker = React.forwardRef(({ }, ref) => {
    const options = [{ name: "Take from camera", icon: <Icon name="camera" color={colors.grey} size={21} />, onPress: () => { } },
    { name: "Choose from galery", icon: <Icon name="image" color={colors.grey} size={21} />, onPress: () => { } },
    ]
    return (
        <RBSheet
            ref={ref}
            height={300}
            openDuration={250}
            closeOnDragDown
            customStyles={{
                container: {
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                }
            }}>
            <View style={styles.wrapper}>
                {options.map(({ name, onPress, icon }) => (
                    <TouchableOpacity key={name} style={styles.pickerOption}>
                        {icon}
                        <Text style={styles.text}>{name}</Text>
                    </TouchableOpacity>
                ))}
            </View>

        </RBSheet>
    );
});

export default ImagePicker