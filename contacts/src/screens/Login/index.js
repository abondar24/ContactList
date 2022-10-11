import React, { useContext, useState } from 'react';
import LoginComponent from '../../components/Login';
import login from '../../context/actions/auth/login';
import { GlobalContext } from '../../context/Provider';

const Login = () => {
    const [form, setForm] = useState({});
    const { authDispatch, authState: { error, loading } } = useContext(GlobalContext);

    const onSubmit = () => {
        if (form.userName && form.password) {
            login(form)(authDispatch);
        }
    };



    const onChange = ({ name, value }) => {

        setForm({ ...form, [name]: value })

        // if (value !== '') {

        //     if (name == 'password') {
        //         if (value.length < 6) {
        //             setErrors(prev => {
        //                 return { ...prev, [name]: 'Minimum password is 6 characters long' }
        //             });

        //         } else {
        //             setErrors(prev => {
        //                 return { ...prev, [name]: null }
        //             });
        //         }
        //     } else {
        //         setErrors(prev => {
        //             return { ...prev, [name]: null }
        //         });
        //     }

        // } else {
        //     setErrors(prev => {
        //         return { ...prev, [name]: 'This field is required' }
        //     });
        // }
    };


    return (
        <LoginComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            error={error}
            loading={loading}
        />
    );
};


export default Login;