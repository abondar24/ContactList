import { View, Text, SafeAreaView, Image, Settings, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../components/common/Container';
import styles from './styles';
import { SETTINGS } from '../../constants/routeNames'

const SideMenu = ({ navigation }) => {

    const menuItems = [
        {
            icon: <Text>T</Text>, name: 'Settings', onPress: () => {
                navigation.navigate(SETTINGS);
            }
        },
        {
            icon: <Text>T</Text>, name: 'Log out', onPress: () => {
                /// navigation.navigate();
            }
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

export default SideMenu