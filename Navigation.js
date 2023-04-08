import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import RestrauntDetails from "./Screens/RestrauntDetails";

export default function ReactNavigation(){
    const Stack=createStackNavigator();

    const ScreenOption={
        headerShown:false,
    }

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={ScreenOption} initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="RestrauntDetail" component={RestrauntDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}