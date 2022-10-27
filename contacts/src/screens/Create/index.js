import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext, useRef } from 'react'
import CreateComponent from '../../components/Create';
import { CONTACTS } from '../../constants/routeNames';
import createContact from '../../context/actions/contacts/createContact';
import { GlobalContext } from '../../context/Provider';

const Create = () => {
    const [form, setForm] = useState({});
    const { navigate } = useNavigation();

    const { contactsDispatch,
        contactsState: {
            createContact: { error, loading },
        }
    } = useContext(GlobalContext);


    const onChangeText = ({ name, value }) => {
        setForm({ ...form, [name]: value });
    }


    const onSubmit = () => {
        createContact(form)(contactsDispatch)(() => {
            navigate(CONTACTS);
        })
    }

    const toggleValueChange = () => {
        setForm({ ...form, "isFavorite": !form.isFavorite });
    };

    const sheetRef = useRef(null)

    const closeSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.close();
        }
    }

    const openSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.open();
        }
    }

    return (
        <CreateComponent onChangeText={onChangeText}
            form={form}
            onSubmit={onSubmit}
            setForm={setForm}
            loading={loading}
            toggleValueChange={toggleValueChange}
            error={error}
            sheetRef={sheetRef}
            closeSheet={closeSheet}
            openSheet={openSheet}
        />
    );
};

export default Create;