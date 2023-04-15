import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function ViewCart() {
  const Items = useSelector((State) => State.CartReducer.SelectedItems.Items);

  const Total = Items.map((Each) => Number(Each.price)).reduce(
    (Prev, Curr) => Prev + Curr,
    0
  );

  const TotalUSD = Total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  console.log(TotalUSD, Items);
  return (
    <>
      {Total ? (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            position: "absolute",
            bottom: 10,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                padding: 13,
                borderRadius: 30,
                width: 320,
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>ViewCart</Text>

              <Text
                style={{
                  position: "absolute",
                  right: 20,
                  color: "white",
                  fontSize: 15,
                  top:"60%"
                }}
              >
                {Total ? TotalUSD : ""}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
