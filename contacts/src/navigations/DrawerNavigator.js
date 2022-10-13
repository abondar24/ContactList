import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import SideMenu from './SideMenu'
const DrawerNavigator = () => {

  const getDrawerContent = navigation => {

    return <SideMenu navigation={navigation} />
  }

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator drawerType='slide' drawerContent={({ navigation }) => getDrawerContent(navigation)}>
      <Drawer.Screen name='Home' component={HomeNavigator} options={{ headerShown: false }}></Drawer.Screen>
    </Drawer.Navigator>
  );
};


export default DrawerNavigator;