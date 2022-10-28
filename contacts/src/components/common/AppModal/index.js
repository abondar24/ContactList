import React from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "../Icon";
import styles from "./styles";
import PropTypes from 'prop-types'

const AppModal = ({ modalVisible, title, modalBody, modalFooter, setModalVisible, closeOnTouchOutside }) => {
    return <Modal visible={modalVisible} transparent>
        <TouchableOpacity onPress={() => {
            if (closeOnTouchOutside) {
                setModalVisible(false);
            }

        }} style={styles.wrapper}>

            <View style={styles.modalView}>
                <ScrollView>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(false);
                        }}>
                            <Icon name='close' type='evil' size={27} />
                        </TouchableOpacity>

                        <Text style={styles.title}>{title || 'Contacts'}</Text>

                        <View />
                        <View />
                        <View />
                        <View />
                        <View />
                    </View>
                    <View style={styles.footerSeparator}></View>
                    <View style={styles.body}>
                        {modalBody}
                    </View>
                    {!modalFooter && <View>
                        <View style={styles.footerSeparator}></View>
                        <View style={styles.footerItems}>
                            <View style={styles.footer}>
                                <Text style={styles.footerText}>Privacy policy</Text>
                                <View style={styles.termsView} />
                                <Text style={styles.footerText}>Terms of usage</Text>
                            </View>
                        </View>
                    </View>}
                </ScrollView>
            </View>
        </TouchableOpacity>

    </Modal>
}

AppModal.propTypes = {
    closeOnTouchOutside: PropTypes.bool,
};

AppModal.def = {
    closeOnTouchOutside: true,
};

export default AppModal;