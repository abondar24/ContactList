import React from "react";
import { View, Text } from 'react-native'
import AppModal from "../common/AppModal";
import CustomButton from '../../components/common/CustomButton'

const ContactsComponent = ({ modalVisible, setModalVisible }) => {
    return (
        <View>
            <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} modalFooter={<></>}

                modalBody={<View>
                    <Text>Ya </Text>
                </View>}
                title='Profile'>

            </AppModal>
            <CustomButton title='open modal' secondary onPress={() => {
                setModalVisible(true);
            }} />
        </View>
    )
}

export default ContactsComponent;