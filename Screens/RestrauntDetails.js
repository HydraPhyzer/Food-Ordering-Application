import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import About from "../Components/RestrauntDetails/About";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItem from "../Components/RestrauntDetails/MenuItem";

export default function RestrauntDetails({route}) {
  return (
    // <SafeAreaView
    //   style={{
    //     backgroundColor: "#eee",
    //     flex: 1,
    //     paddingTop: Platform.OS === "android" ? 45 : 0,
    //   }}
    // >
    <View>
      <About route={route} />
      <Divider width={1} style={{ marginVertical: 10 }} color="#34495e" />
      <MenuItem/>
    </View>
    // </SafeAreaView>
  );
}
