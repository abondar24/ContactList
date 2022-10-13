import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CONTACTS, CREATE, DETAILS, SETTINGS } from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import Create from '../screens/Create';
import Settings from '../screens/Settings'

const HomeNavigator = () => {
    const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator initialRouteName="Contact" screenOptions={{ headerTitleAlign: 'center' }}>
            <HomeStack.Screen name={CONTACTS} component={Contacts}></HomeStack.Screen >
            <HomeStack.Screen name={DETAILS} component={Details}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE} component={Create}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator >
    );
};

export default HomeNavigator;