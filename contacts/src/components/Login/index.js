import React from 'react'
import { Text, Image, View, Touchable, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { REGISTER } from '../../constants/routeNames';

const LoginComponent = () => {

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
                    Please login here
                </Text>

                <View style={styles.form}>
                    <Input
                        label='Username'
                        iconPosition='right'
                        placeholder='Enter username'
                    // error={'This field is required'}
                    />

                    <Input
                        label='Password'
                        icon={<Text>Show</Text>}
                        iconPosition='right'
                        placeholder='Enter password'
                        secureTextEntry={true}
                    />

                    <CustomButton title='Submit' primary />

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