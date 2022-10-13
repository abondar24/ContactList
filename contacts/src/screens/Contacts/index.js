import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../../components/common/Container';

const Contacts = () => {

    const { setOptions, toggleDrawer } = useNavigation();
    useEffect(() => {
        setOptions({
            headerLeft: () =>
                <TouchableOpacity onPress={
                    () => {
                        toggleDrawer();
                    }
                }>
                    <Text style={{ padding: 10 }}>Nav</Text>
                </TouchableOpacity>
        })
    }, []);

    return (
        <Container >
            <Text style={{ color: 'black' }}>Hui</Text>
        </Container>
    );
};


export default Contacts;