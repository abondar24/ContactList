import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext } from 'react'
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
    return (
        <CreateComponent onChangeText={onChangeText}
            form={form}
            onSubmit={onSubmit}
            setForm={setForm}
            loading={loading}
            error={error} />
    );
};

export default Create;