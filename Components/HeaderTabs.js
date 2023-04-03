import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {
  const [ActiveTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        Value="Delivery"
        BtnColor="black"
        TextColor="white"
        ActiveTab={ActiveTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        Value="Pickup"
        BtnColor="white"
        TextColor="black"
        ActiveTab={ActiveTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = ({
  Value,
  TextColor,
  BtnColor,
  ActiveTab,
  setActiveTab,
}) => (
  <TouchableOpacity
    style={{
      backgroundColor: ActiveTab === Value ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => {
      setActiveTab(Value);
    }}
  >
    <Text
      style={{
        color: ActiveTab === Value ? "white" : "black",
        fontSize: 12,
        fontWeight: "700",
      }}
    >
      {Value}
    </Text>
  </TouchableOpacity>
);
