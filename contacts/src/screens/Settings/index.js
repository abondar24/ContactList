import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SettingsComponent from '../../components/Settings';

const Settings = () => {

    const [email, setEmail] = React.useState(null);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [sortBy, setSortBy] = React.useState(null);


    const saveSetting = (key, value) => {
        AsyncStorage.setItem(key, value);
    };

    const options = [
        { title: 'My Info', subTitle: 'Setup your profile', onPress: () => { } },
        { title: 'Accounts', subTitle: null, onPress: () => { } },
        {
            title: 'Default account for new contacts',
            subTitle: email,
            onPress: () => { },
        },
        { title: 'Contacts to display', subTitle: 'All contacts', onPress: () => { } },
        {
            title: 'Sort by',
            subTitle: sortBy,
            onPress: () => {
                setModalVisible(true);
            },
        },
        { title: 'Name format', subTitle: 'First name first', onPress: () => { } },
        { title: 'Import', subTitle: null, onPress: () => { } },
        { title: 'Export', subTitle: null, onPress: () => { } },
        { title: 'Blocked numbers', subTitle: null, onPress: () => { } },
        { title: 'About Contacts', subTitle: null, onPress: () => { } }
    ];

    const prefs = [
        {
            name: 'First Name',
            selected: sortBy === 'First Name',

            onPress: () => {
                saveSetting('sortBy', 'First Name');
                setSortBy('First Name');
                setModalVisible(false);
            },
        },
        {
            name: 'Last Name',
            selected: sortBy === 'Last Name',
            onPress: () => {
                saveSetting('sortBy', 'Last Name');
                setSortBy('Last Name');
                setModalVisible(false);
            },
        },
    ];

    const getSettings = async () => {
        const user = await AsyncStorage.getItem('user');
        setEmail(JSON.parse(user).email);

        const sortBy = await AsyncStorage.getItem('sortBy');
        if (sortBy) {
            setSortBy(sortBy);
        }
    };

    useEffect(() => {
        getSettings();
    }, []);


    return (
        <SettingsComponent settingsOptions={options}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            prefOptions={prefs}
        >

        </SettingsComponent>
    );
};

export default Settings;