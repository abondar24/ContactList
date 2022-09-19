import React from 'react'

import { Text } from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';

const Login = () => {
    const [value, onChangeText] = React.useState('');
    return (
        <Container>
            <Input
                label='Username'
                value={value}
                onChangeText={(text) => onChangeText(text)}
                iconPosition='right'
                error={'This field is required'}
            />

            <Input
                label='Password'
                value={value}
                onChangeText={(text) => onChangeText(text)}
                icon={<Text>HIDE</Text>}
                iconPosition='right'
            />

            <CustomButton title='Submit' loading={true} disabled={true} secondary />
            <CustomButton title='Click' loading={true} disabled={false} primary />
            <CustomButton title='Click' loading={false} disabled={false} danger />

        </Container>
    );
};


export default Login;