import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import RestrauntDetails from "./Screens/RestrauntDetails";

import { Provider as ReduxProvider } from "react-redux";
import Store from "./Redux/Store";
import OrderCompleted from "./Screens/OrderCompleted";
import Onboarding from "./Screens/OnboardingScreens/Onboarding";
import SignIn from "./Screens/AuthenticationScreens/SignIn";
import SignUp from "./Screens/AuthenticationScreens/SignUp";

export default function ReactNavigation() {
  const Stack = createStackNavigator();

  const ScreenOption = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={Store}>
      <NavigationContainer>
        {/* <Stack.Navigator screenOptions={ScreenOption} initialRouteName="Home"> */}
        <Stack.Navigator
          screenOptions={ScreenOption}
          initialRouteName="SignIn"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="OnBoarding" component={Onboarding} />
          <Stack.Screen name="RestrauntDetail" component={RestrauntDetails} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
