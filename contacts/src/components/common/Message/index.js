import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import colors from '../../../assets/themes/colors';

const Message = ({ message, retry, retryFn, onDismiss, primary, danger, info, success }) => {



    const [userDismissed, setDismissed] = useState(false);

    const getBgColor = () => {

        if (primary) {
            return colors.primary;
        }


        if (success) {
            return colors.success
        }

        if (danger) {
            return colors.danger;
        }

        if (info) {
            return colors.secondary;
        }
    }

    return (
        <>

            {userDismissed ? null :

                <TouchableOpacity
                    style={[styles.wrapper, { backgroundColor: getBgColor() }]}>
                    <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <Text style={{
                            color: colors.white,
                        }}>
                            {message}
                        </Text>


                        {retry && !typeof onDismiss === 'function' && (
                            <TouchableOpacity onPress={retryFn}>
                                <Text style={{
                                    color: colors.white,
                                }}>Retry</Text>
                            </TouchableOpacity>

                        )}

                        {typeof onDismiss === 'function' && (
                            <TouchableOpacity onPress={() => {
                                setDismissed(true);
                                onDismiss();
                            }}>
                                <Text style={{
                                    color: colors.white,
                                }}>X
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </TouchableOpacity>
            }
        </>
    )
}

export default Message 