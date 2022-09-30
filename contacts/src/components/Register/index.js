import React from 'react'
import { Text, Image, View, Touchable, TouchableOpacity } from 'react-native';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../constants/routeNames';

const RegisterComponent = ({ onSubmit, onChange, form, errors, ...props }) => {

    const { navigate } = useNavigation();
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


                    <Input
                        label='Username'
                        iconPosition='right'
                        placeholder='Enter username'
                        error={errors.userName}
                        onChangeText={(value) => onChange({ name: "userName", value })}
                    />

                    <Input
                        label='First name'
                        iconPosition='right'
                        placeholder='Enter first name'
                        error={errors.firstName}
                        onChangeText={(value) => onChange({ name: "firstName", value })}
                    />

                    <Input
                        label='Last name'
                        iconPosition='right'
                        placeholder='Enter last name'
                        error={errors.lastName}
                        onChangeText={(value) => onChange({ name: "lastName", value })}
                    />

                    <Input
                        label='Email'
                        iconPosition='right'
                        placeholder='Enter email'
                        error={errors.email}
                        onChangeText={(value) => onChange({ name: "email", value })}
                    />


                    <Input
                        label='Password'
                        icon={<Text>Show</Text>}
                        iconPosition='right'
                        placeholder='Enter password'
                        isSecure={true}
                        autoCapitalize={'none'}
                        error={errors.password}
                        onChangeText={(value) => onChange({ name: "password", value })}
                    />

                    <CustomButton onPress={onSubmit} title='Submit' primary />

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