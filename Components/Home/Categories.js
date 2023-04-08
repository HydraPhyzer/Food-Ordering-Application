import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const Items = [
  {
    Image: require("../../assets/Images/ShoppingBag.png"),
    Value: "Pick-Up",
  },
  {
    Image: require("../../assets/Images/SoftDrink.png"),
    Value: "Soft-Drinks",
  },
  {
    Image: require("../../assets/Images/Bread.png"),
    Value: "Bread",
  },
  {
    Image: require("../../assets/Images/FastFood.png"),
    Value: "Fast-Food",
  },
  {
    Image: require("../../assets/Images/Deals.png"),
    Value: "Deals",
  },
  {
    Image: require("../../assets/Images/Coffee.png"),
    Value: "Coffee",
  },
  {
    Image: require("../../assets/Images/Desserts.png"),
    Value: "Desserts",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView
        scrollEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {Items.map((Item, Ind) => {
          return (
            <View key={Ind} style={{ alignItems: "center", marginRight: 30 }}>
              <Image
                source={Item.Image}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "contain",
                }}
              />
              <Text style={{ fontSize: 12, fontWeight: 500 }}>
                {Item.Value}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
