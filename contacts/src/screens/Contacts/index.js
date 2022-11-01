import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState, useRef } from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from '../../components/common/Icon'
import ContactsComponent from '../../components/Contacts';
import { DETAILS } from '../../constants/routeNames';
import getContacts from '../../context/actions/contacts/getContacts';
import { GlobalContext } from '../../context/Provider'

const Contacts = () => {
    const { navigate } = useNavigation();
    const [sortBy, setSortBy] = React.useState(null);
    const { setOptions, toggleDrawer } = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const { contactsDispatch,
        contactsState: {
            getContacts: { data, loading },
        } } = useContext(GlobalContext);


    const contactsRef = useRef([]);

    useEffect(() => {
        getContacts()(contactsDispatch);
    }, []);



    const getSettings = async () => {
        const sortBy = await AsyncStorage.getItem('sortBy');
        if (sortBy) {
            setSortBy(sortBy);
        }
    }
    useFocusEffect(React.useCallback(() => {
        getSettings();

        return () => {

        }
    }, []));


    useEffect(() => {
        const prev = contactsRef.current;
        contactsRef.current = data;

        const newData = contactsRef.current;
        if (newData.length - prev.length === 1) {
            const newContact = newData.find(
                (item) => !prev.map(i => i.id).includes(item.id)
            );
            navigate(DETAILS, { item: newContact })
        }


    }, [data.length])

    useEffect(() => {
        setOptions({
            headerLeft: () =>
                <TouchableOpacity
                    onPress={() => {
                        toggleDrawer();
                    }}>
                    <Icon type='material' name='menu' size={25} style={{ padding: 10 }} />
                </TouchableOpacity>
        })
    }, []);

    return (
        <ContactsComponent modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            data={data}
            loading={loading}
            sortBy={sortBy} />
    );
};


export default Contacts;