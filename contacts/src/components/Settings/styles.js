import { StyleSheet } from 'react-native'
import colors from '../../assets/themes/colors'

export default StyleSheet.create({
    modalBody: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    scrollStyle: { backgroundColor: colors.white },
    scrollText: { fontSize: 14, opacity: 0.6, paddingTop: 5 },
    lineStyle: { height: 0.5, backgroundColor: colors.grey },
    paddingStyle: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 20
    }
});