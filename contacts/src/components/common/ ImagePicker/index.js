import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import RBSheet from 'react-native-raw-bottom-sheet'
import colors from '../../../assets/themes/colors'
import Icon from '../Icon'
import ImagePickerCropper from 'react-native-image-crop-picker'

const ImagePicker = React.forwardRef(({ onFileSelected }, ref) => {
    const options = [{
        name: "Take from camera", icon: <Icon name="camera" color={colors.grey} size={21} />, onPress: () => {
            ImagePickerCropper.openCamera({
                width: 300,
                height: 300,
                cropping: true,
                freeStyleCropEnabled: true,
            }).then((images) => {
                onFileSelected(images);
            }).catch((error) => {
                console.log(error);
            })
        }
    },
    {
        name: "Choose from galery", icon: <Icon name="image" color={colors.grey} size={21} />, onPress: () => {
            ImagePickerCropper.openPicker({
                width: 300,
                height: 300,
                cropping: true,
                freeStyleCropEnabled: true,
            }).then((images) => {
                onFileSelected(images);
            }).catch((error) => {
                console.log(error);
            })
        }
    },
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
                    <TouchableOpacity key={name} style={styles.pickerOption} onPress={onPress}>
                        {icon}
                        <Text style={styles.text}>{name}</Text>
                    </TouchableOpacity>
                ))}
            </View>

        </RBSheet>
    );
});

export default ImagePicker