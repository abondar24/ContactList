import React from 'react'

import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import { Text } from 'react-native';

const Login = () => {
    const [value, onChangeText] = React.useState('');
    return (
        <Container>
            <Input
                label="Username"
                value={value}
                onChangeText={(text) => onChangeText(text)}
                iconPosition="right"
                error={"This field is required"}
            />

            <Input
                label="Password"
                value={value}
                onChangeText={(text) => onChangeText(text)}
                icon={<Text>HIDE</Text>}
                iconPosition="right"
            />
        </Container>
    );
};


export default Login;