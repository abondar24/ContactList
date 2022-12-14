import { StyleSheet } from 'react-native'
import colors from '../../assets/themes/colors';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageView: {
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: 'center',
    },
    chooseText: {
        color: colors.primary,
        textAlign: 'center'
    },
    switch: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
    }
});