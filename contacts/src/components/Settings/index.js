import { TouchableOpacity, View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import Container from '../../components/common/Container';
import colors from '../../assets/themes/colors'
import AppModal from '../common/AppModal';
import Icon from '../common/Icon';

const SettingsComponent = ({ settingsOptions, modalVisible, setModalVisible, prefOptions }) => {
    return (
        <>
            <AppModal
                modalVisible={modalVisible}
                modalFooter={<></>}
                modalBody={<View>
                    {prefOptions.map(({ name, selected, onPress }) =>
                        <View key={name}>

                            <TouchableOpacity style={styles.modalBody} onPress={onPress}>
                                {selected && <Icon size={17} name='check' type='material' />}
                                <Text style={{ fontSize: 17, paddingLeft: selected ? 15 : 30 }}>
                                    {name}
                                </Text>
                            </TouchableOpacity>
                        </View>

                    )}
                </View>}
                closeOnTouchOutside={false}
                title="Sort by"
                setModalVisible={setModalVisible}
            />
            <ScrollView style={styles.scrollStyle}>
                {settingsOptions.map(({ title, subTitle, onPress }, index) => (
                    <TouchableOpacity key={title} onPress={onPress}>
                        <View style={styles.paddingStyle}>
                            <Text style={{ fontSize: 17 }}>
                                {title}
                            </Text>
                            {subTitle && <Text style={
                                styles.scrollText
                            }>{subTitle}</Text>}
                        </View>

                        <View style={styles.lineStyle}></View>
                    </TouchableOpacity>))}
            </ScrollView>
        </>

    )
}

export default SettingsComponent