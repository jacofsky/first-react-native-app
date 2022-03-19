import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

const NavigationDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

export default NavigationDrawer