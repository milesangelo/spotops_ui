import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../../Home/HomeScreen";
import MapScreen from "../../Map/MapScreen";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Contact" component={MapScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;