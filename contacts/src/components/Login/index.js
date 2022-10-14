import React, { useState } from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import Message from '../../components/common/Message';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { REGISTER } from '../../constants/routeNames';

const LoginComponent = ({ error, form, justSignedUp, onChange, onSubmit, loading }) => {

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
                    Please login here
                </Text>
                <View style={styles.form}>

                    {justSignedUp && <Message onDismiss={() => { }} success message="Account created" />}

                    {error && !error.error && (

                        <Message onDismiss={() => { }} danger message="invalid credentials" />
                    )}


                    {error?.error && <Message danger onDismiss message={error?.error} />}

                    <Input
                        label='Username'
                        iconPosition='right'
                        placeholder='Enter username'
                        value={form.userName || null}
                        onChangeText={(value) => onChange({ name: 'userName', value })}
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
                        onChangeText={(value) => onChange({ name: 'password', value })}
                    />

                    <CustomButton
                        disabled={loading}
                        loading={loading}
                        title='Submit'
                        primary
                        onPress={onSubmit} />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>
                            Need a new account?
                        </Text>
                        <TouchableOpacity onPress={() => {
                            navigate(REGISTER);
                        }}>
                            <Text style={styles.linkBtn}>
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </Container>
    )
}

export default LoginComponent;