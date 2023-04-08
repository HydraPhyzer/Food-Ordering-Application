import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View
      style={{
        backgroundColor: "black",
        borderRadius: 10,
        marginHorizontal: 15,
        padding: 5,
        marginVertical: 5,
        elevation: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          margin: 5,
          marginHorizontal: 20,
          justifyContent: "space-between",
        }}
      >
        <Icon Name="home" Value="Home" />
        <Icon Name="search" Value="Browse" />
        <Icon Name="receipt" Value="Orders" />
        <Icon Name="user-alt" Value="Account" />
      </View>
    </View>
  );
}

const Icon = ({ Name, Value }) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={Name}
        size={20}
        color="#ecf0f1"
        style={{ alignSelf: "center" }}
      />
      {/* <Text style={{ fontSize: 12, fontWeight: "500",color:"white" }}>{Value}</Text> */}
    </View>
  </TouchableOpacity>
);
