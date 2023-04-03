import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestrauntItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 0 }}>
      <View style={{ marginTop: 15, padding: 15, backgroundColor: "white" }}>
        <RestrauntImage />
        <RestrauntInfo />
      </View>
    </TouchableOpacity>
  );
}

const RestrauntImage = () => (
  <>
    <Image
      source={{
        uri: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg",
      }}
      style={{ width: "100%", height: 180 }}
      borderRadius={5}
    />
    <TouchableOpacity
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        backgroundColor: "white",
        padding: 1,
        borderRadius: 5,
      }}
    >
      <MaterialCommunityIcons
        name="heart-circle-outline"
        size={25}
        color="red"
      />
    </TouchableOpacity>
  </>
);

const RestrauntInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: 500 }}>
        Farmhouse Thai Kitchen Cuisine
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-50 Min</Text>
    </View>

    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 12, fontWeight: "500" }}>4.5</Text>
    </View>
  </View>
);
