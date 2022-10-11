import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import RegisterComponent from '../../components/Register';
import { LOGIN } from '../../constants/routeNames';
import { clearAuthState } from '../../context/actions/auth/register';
import register from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/Provider';


const Register = () => {

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const { authDispatch, authState: { error, loading, data } } = useContext(GlobalContext);
    const { navigate } = useNavigation();

    React.useEffect(() => {
        if (data) {
            navigate(LOGIN)
        }
    }, [data])

    useFocusEffect(
        React.useCallback(() => {


            return () => {
                if (data) {
                    clearAuthState()(authDispatch);
                }
            }

        }, [data, error])
    );


    const onChange = ({ name, value }) => {

        setForm({ ...form, [name]: value })

        if (value !== '') {

            if (name == 'password') {
                if (value.length < 6) {
                    setErrors(prev => {
                        return { ...prev, [name]: 'Minimum password is 6 characters long' }
                    });

                } else {
                    setErrors(prev => {
                        return { ...prev, [name]: null }
                    });
                }
            } else {
                setErrors(prev => {
                    return { ...prev, [name]: null }
                });
            }

        } else {
            setErrors(prev => {
                return { ...prev, [name]: 'This field is required' }
            });
        }
    };

    const onSubmit = () => {
        if (!form.userName) {
            setErrors(prev => {
                return { ...prev, userName: "Please add an username" }
            });
        }

        if (!form.firstName) {
            setErrors(prev => {
                return { ...prev, firstName: "Please add a first name" }
            });
        }

        if (!form.lastName) {
            setErrors(prev => {
                return { ...prev, lastName: "Please add a last name" }
            });
        }


        if (!form.email) {
            setErrors(prev => {
                return { ...prev, email: "Please add an email" }
            });
        }

        if (!form.password) {
            setErrors(prev => {
                return { ...prev, password: "Please fill add a password" }
            });
        }

        if (
            Object.values(form).length == 5 &&
            Object.values(form).every(item => item.trim().length > 0) &&
            Object.values(errors).every(item => !item)
        ) {
            register(form)(authDispatch);
        }
    };

    return (
        <RegisterComponent form={form}
            errors={errors}
            error={error}
            loading={loading}
            onSubmit={onSubmit}
            onChange={onChange} />
    );
};

export default Register;