import React, { useContext, useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import LoginComponent from '../../components/Login';
import login from '../../context/actions/auth/login';
import { GlobalContext } from '../../context/Provider';

const Login = () => {
    const [form, setForm] = useState({});
    const [justSignedUp, setJustSignedUp] = useState(false);
    const { params } = useRoute();
    const { authDispatch, authState: { error, loading } } = useContext(GlobalContext);

    const onSubmit = () => {
        if (form.userName && form.password) {
            login(form)(authDispatch);
        }
    };

    useEffect(() => {
        if (params?.data) {
            setJustSignedUp(true);
            setForm({ ...form, userName: params.data.username });
        }
    }, [params]);



    const onChange = ({ name, value }) => {
        setJustSignedUp(false);
        setForm({ ...form, [name]: value });
    };


    return (
        <LoginComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            error={error}
            loading={loading}
            justSignedUp={justSignedUp}
        />
    );
};


export default Login;