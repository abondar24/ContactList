import { View, Text, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import Container from '../../components/common/Container';
import styles from './styles';
import { SETTINGS } from '../../constants/routeNames';
import logout from '../../context/actions/auth/logout';
import Icon from '../../components/common/Icon';

const SideMenu = ({ navigation, authDispatch }) => {

    const handleLogout = () => {
        navigation.toggleDrawer();
        Alert.alert('Log out!', 'Do you want to logout?', [
            {
                text: 'Cancel',
                onPress: () => { },
            },
            {
                text: 'Ok',
                onPress: () => {
                    logout()(authDispatch);
                }
            },
        ]);
    };

    const menuItems = [
        {
            icon: <Icon type='fontisto' name='player-settings' size={17}></Icon>, name: 'Settings', onPress: () => {
                navigation.navigate(SETTINGS);
            }
        },
        {
            icon: <Icon type='material' name='logout' size={17}></Icon>, name: 'Log out', onPress: handleLogout,
        }
    ]


    return (
        <SafeAreaView>
            <Container>
                <Image height={70}
                    width={70}
                    source={require('../../assets/images/logo.png')}
                    style={styles.logoImage} />

                <View style={{ paddingHorizontal: 70 }}>
                    {menuItems.map(({ name, icon, onPress }) =>
                        <TouchableOpacity key={name} style={styles.item} onPress={onPress}>
                            {icon}
                            <Text style={styles.itemText}>{name}</Text>
                        </TouchableOpacity>)}
                </View>
            </Container>
        </SafeAreaView>
    )
}

export default SideMenu;