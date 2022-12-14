import React, { useState } from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../constants/routeNames';

const RegisterComponent = ({ onSubmit, onChange, form, errors, error, loading, ...props }) => {

    const { navigate } = useNavigation();
    const [isSecure, setIsSecure] = useState(true);

    return (
        <Container>
            <Image height={70}
                width={70}
                source={require('../../assets/images/logo.png')}
                style={styles.logoImage} />
            <View>
                <Text style={styles.title}>
                    Welcome to Contacts
                </Text>
                <Text style={styles.subTitle}>
                    Create an account
                </Text>

                <View style={styles.form}>
                    {error?.error && <Message retry
                        retryFn={() => {
                            console.log('222', 222);
                        }}
                        danger
                        message={error?.error}></Message>}
                    <Input
                        label='Username'
                        iconPosition='right'
                        placeholder='Enter username'
                        error={errors.userName || error?.username?.[0]}
                        onChangeText={(value) => onChange({ name: "userName", value })}
                    />

                    <Input
                        label='First name'
                        iconPosition='right'
                        placeholder='Enter first name'
                        error={errors.firstName || error?.firstName?.[0]}
                        onChangeText={(value) => onChange({ name: "firstName", value })}
                    />

                    <Input
                        label='Last name'
                        iconPosition='right'
                        placeholder='Enter last name'
                        error={errors.lastName || error?.lastName?.[0]}
                        onChangeText={(value) => onChange({ name: "lastName", value })}
                    />

                    <Input
                        label='Email'
                        iconPosition='right'
                        placeholder='Enter email'
                        error={errors.email || error?.email?.[0]}
                        onChangeText={(value) => onChange({ name: "email", value })}
                    />


                    <Input
                        label='Password'
                        icon={
                            <TouchableOpacity onPress={() => {
                                setIsSecure(prev => !prev);
                            }}>
                                <Text>{isSecure ? "Show" : "Hide"}</Text>
                            </TouchableOpacity>
                        }
                        secureTextEntry={isSecure}
                        iconPosition='right'
                        placeholder='Enter password'
                        autoCapitalize={'none'}
                        error={errors.password || error?.password?.[0]}
                        onChangeText={(value) => onChange({ name: "password", value })}
                    />

                    <CustomButton onPress={onSubmit}
                        title='Submit'
                        loading={loading}
                        disabled={loading}
                        primary />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>
                            Have an account?
                        </Text>
                        <TouchableOpacity onPress={() => {
                            navigate(LOGIN);
                        }}>
                            <Text style={styles.linkBtn}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </Container>
    )
}

export default RegisterComponent;