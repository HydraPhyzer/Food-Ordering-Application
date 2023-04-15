import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import About from "../Components/RestrauntDetails/About";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItem from "../Components/RestrauntDetails/MenuItem";
import ViewCart from "../Components/RestrauntDetails/ViewCart";

export default function RestrauntDetails({route,navigation}) {
  return (
    // <SafeAreaView
    //   style={{
    //     backgroundColor: "#eee",
    //     flex: 1,
    //     paddingTop: Platform.OS === "android" ? 45 : 0,
    //   }}
    // >
    <View style={{flex:1}}>
      <About route={route} />
      <Divider width={1} style={{ marginVertical: 10 }} color="#1abc9c" />
      <MenuItem RestrauntName={route.params.Name}/>
      <ViewCart navigation={navigation}/>
    </View>
    // </SafeAreaView>
  );
}

