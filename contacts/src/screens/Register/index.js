import React, { useEffect, useState } from 'react'
import RegisterComponent from '../../components/Register';
import axiosInstance from '../../helpers/axiosInterceptor';


const Register = () => {

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    React.useEffect(() => {
        axiosInstance.post('/contacts').catch((err) => {
            console.log('err', err);
        });
    }, []);



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
    };

    return (
        <RegisterComponent form={form} errors={errors} onSubmit={onSubmit} onChange={onChange} />
    );
};

export default Register;