import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from './src/navigation/DrawerNavigation';
import FavouriteProvider from './src/context/FavouriteProvider';

export default function Router(){
  return(
    <FavouriteProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </FavouriteProvider>
  )
}