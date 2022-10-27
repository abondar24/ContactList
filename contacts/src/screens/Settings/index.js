import React from 'react'
import SettingsComponent from '../../components/Settings';

const Settings = () => {

    const options = [
        { title: 'My Info', subTitle: 'Setup your profile', onPress: () => { } },
        { title: 'Accounts', subTitle: null, onPress: () => { } },
        {
            title: 'Default account for new contacts',
            subTitle: null,
            onPress: () => { },
        },
        { title: 'Contacts to display', subTitle: 'All contacts', onPress: () => { } },
        {
            title: 'Sort by',
            subTitle: null,
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

    return (
        <SettingsComponent settingsOptions={options}></SettingsComponent>
    );
};

export default Settings;