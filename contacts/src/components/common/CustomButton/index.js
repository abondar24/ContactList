import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './styles'
import colors from '../../../assets/themes/colors'

const CustomButton = ({ title, loading, onPress, disabled, secondary, primary, danger }) => {

    const getBgColor = () => {

        if (disabled) {
            return colors.grey;
        }

        if (primary) {
            return colors.primary;
        }

        if (danger) {
            return colors.danger;
        }

        if (secondary) {
            return colors.secondary;
        }
    }


    return (
        <TouchableOpacity disabled={disabled}
            onPress={onPress}
            style={[styles.wrapper, { backgroundColor: getBgColor() }]}>

            <View style={[styles.loaderSection]}>
                {loading && (<ActivityIndicator color={primary ? colors.secondary : colors.primary} />)}

                {title && (<Text style={{ color: disabled ? colors.black : colors.white, paddingLeft: loading ? 5 : 0 }}>
                    {loading ? 'Please wait...' : title}
                </Text>
                )}
            </View>

        </TouchableOpacity>
    )
}

export default CustomButton