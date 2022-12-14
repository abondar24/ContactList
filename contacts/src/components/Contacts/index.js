import React from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import Message from '../../components/common/Message'
import colors from "../../assets/themes/colors";
import Icon from "../common/Icon";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { CREATE, DETAILS } from "../../constants/routeNames";

const ContactsComponent = ({ data, loading, sortBy }) => {

    const { navigate } = useNavigation();

    const ListEmptyComponent = () => {
        return (
            <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
                <Message info message='Nothing to show'></Message>
            </View>
        );
    };



    const renderItem = ({ item }) => {
        const { contact_picture, first_name, last_name, country_code, phone_number } = item;

        return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => {
                navigate(DETAILS, { item });
            }}>
                <View style={styles.item}>
                    {contact_picture ? (<Image style={styles.icon} source={{ uri: contact_picture }} />) :
                        (<View style={styles.iconEmpty}>
                            <Text style={[styles.name, { color: colors.white }]}>{first_name[0]}</Text>
                            <Text style={[styles.name, { color: colors.white }]}>{last_name[0]}</Text>
                        </View>)}

                    <View style={{ paddingLeft: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>
                                {`${first_name} ${last_name}`}
                            </Text>
                        </View>
                        <Text style={styles.phoneNumber}>{`${country_code} ${phone_number}`}</Text>
                    </View>
                </View>
                <Icon name='right' type='ant' size={21} color={colors.grey} />
            </TouchableOpacity>
        );
    };

    return (
        <>
            <View style={{ backgroundColor: colors.white }}>
                {loading &&
                    <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
                        <ActivityIndicator size='large' color={colors.primary} />
                    </View>}
                {!loading && (
                    <View style={{ paddingVertical: 20 }}>
                        <FlatList
                            data={sortBy ? data.sort((a, b) => {
                                if (sortBy === 'First Name') {
                                    if (b.first_name > a.first_name) {
                                        return -1
                                    } else {
                                        return 1
                                    }
                                }

                                if (sortBy === 'Last Name') {
                                    if (b.last_name > a.last_name) {
                                        return -1
                                    } else {
                                        return 1
                                    }
                                }
                            }) : data}
                            keyExtractor={(item) => String(item.id)}
                            renderItem={renderItem}
                            ListEmptyComponent={ListEmptyComponent}
                            ListFooterComponent={<View style={{ height: 150 }}></View>}
                            ItemSeparatorComponent={() => {
                                <View style={{ height: 0.5, backgroundColor: colors.grey }}></View>
                            }}
                        />
                    </View>

                )}
            </View>

            <TouchableOpacity style={styles.floatingActionButton} onPress={() => {
                navigate(CREATE)
            }}>
                <Icon name='plus' size={21} color={colors.white}></Icon>
            </TouchableOpacity>
        </>
    )
}

export default ContactsComponent;