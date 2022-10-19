import React from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import AppModal from "../common/AppModal";
import Message from '../../components/common/Message'
import colors from "../../assets/themes/colors";
import Icon from "../common/Icon";
import styles from "./styles";


const ContactsComponent = ({ modalVisible, setModalVisible, data, loading }) => {


    const ListEmptyComponent = () => {
        return (
            <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
                <Message info message='Nothing to show'></Message>
            </View>
        );
    };



    const renderItem = ({ item }) => {
        const { contact_picture, first_name, last_name, phone_number } = item;

        return (
            <TouchableOpacity style={styles.itemContainer}>
                <View style={styles.item}>
                    {contact_picture ? (<Image style={{ width: 45, height: 45, borderRadius: 100 }} source={{ uri: contact_picture }} />) :
                        (<View style={{ width: 45, height: 45, backgroundColor: colors.grey }}></View>)}

                    <View style={{ flexDirection: 'row' }}>
                        <Text>
                            {first_name}
                        </Text>
                        <Text>
                            {last_name}
                        </Text>
                    </View>
                    <Text>{phone_number}</Text>
                </View>
                <Icon name='right' type='ant' />
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} modalFooter={<></>}

                modalBody={<View>
                    <Text>Ya </Text>
                </View>}
                title='Profile'>

            </AppModal>

            {loading &&
                <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
                    <ActivityIndicator size='large' color={colors.primary} />
                </View>}
            {!loading && (
                <View style={{ paddingVertical: 20 }}>
                    <FlatList data={data} keyExtractor={(item) => String(item.id)}
                        ListEmptyComponent={ListEmptyComponent} renderItem={renderItem}
                        ListFooterComponent={<View style={{ height: 150 }}></View>} />
                </View>

            )}
        </View>
    )
}

export default ContactsComponent;