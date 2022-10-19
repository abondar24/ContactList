import React from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "../Icon";

import styles from "./styles";

const AppModal = ({ modalVisible, title, modalBody, modalFooter, setModalVisible }) => {
    return <Modal visible={modalVisible} transparent>
        <TouchableOpacity onPress={() => {
            setModalVisible(false);
        }} style={styles.wrapper}>



            <View style={styles.modalView}>
                <ScrollView>
                    <View style={styles.header}>
                        <Icon name='close' type='evil' size={27} />
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

export default AppModal;