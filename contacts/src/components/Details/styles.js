import { StyleSheet } from 'react-native'
import colors from '../../assets/themes/colors';


export default StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        backgroundColor: colors.white
    },
    names: {
        fontSize: 23,
    },
    content: {
        paddingLeft: 20
    },
    hrLine: {
        height: 10,
        borderColor: colors.grey,
        borderBottomWidth: 0.4
    },
    topCallOptions: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 20,
        paddingHorizontal: 29,
        alignItems: 'center'
    },
    topCallOption: {
        alignItems: 'center'
    },
    middleText: {
        fontSize: 14,
        color: colors.primary,
        paddingVertical: 5,
    },
    middleCallOptions: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    phoneNumber: {
        flexGrow: 1,
        paddingHorizontal: 20,
    },
    misc: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    editButton: {
        alignSelf: 'flex-end',
        marginRight: 20,
        width: 200
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: 'center',
    },
    imageView: {
        alignItems: 'center',
        paddingVertical: 20
    },
    chooseText: {
        color: colors.primary,
        textAlign: 'center'
    },
})