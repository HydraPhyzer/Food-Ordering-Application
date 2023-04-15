import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import RestrauntDetails from "./Screens/RestrauntDetails";

// import { Provider as ReduxProvider } from "react-redux";
// import configureStore from "./Redux/Store";
// const store = configureStore();


import { Provider as ReduxProvider } from 'react-redux'
import Store from "./Redux/Store";
import OrderCompleted from "./Screens/OrderCompleted";


export default function ReactNavigation() {
  const Stack = createStackNavigator();

  const ScreenOption = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={ScreenOption} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestrauntDetail" component={RestrauntDetails} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator> 
      </NavigationContainer>
    </ReduxProvider>
  );
}
