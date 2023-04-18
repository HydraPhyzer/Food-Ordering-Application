import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs({ navigation, mv, mh }) {
  return (
    <View
      style={{
        backgroundColor: "black",
        borderRadius: 10,
        marginHorizontal: mh,
        padding: 5,
        marginVertical: mv,
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
        <Icon Name="home" Value="Home" navigation={navigation} />
        <Icon Name="heart" Value="Browse" navigation={navigation} />
        <Icon Name="receipt" Value="Orders" navigation={navigation} />
        <Icon Name="user-alt" Value="Account" navigation={navigation} />
      </View>
    </View>
  );
}

const Icon = ({ Name, Value, navigation }) => (
  <TouchableOpacity
    onPress={() => {
      Name == "user-alt"
        ? navigation.navigate("Accounts")
        : Name == "home"
        ? navigation.navigate("Home")
        : Name == "heart"
        ? navigation.navigate("LikedRestraunts")
        : Name == "receipt"
        ? navigation.navigate("Receipt")
        : "";
    }}
  >
    <View>
      <FontAwesome5
        name={Name}
        size={20}
        color="#ecf0f1"
        style={{ alignSelf: "center" }}
      />
    </View>
  </TouchableOpacity>
);
