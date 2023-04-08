import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useState } from "react";

export default function SearchBar({ CityHandler }) {
  const [Name, setName] = useState("");
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{
          key: "AIzaSyBynj-PrIn_DZgU3e11zbANe2lqL8SZGFk",
          language: "en",
        }}
        textInputProps={{
          onChangeText: (text) => {
            setName(text);
          },
        }}
        placeholder="Search Any Place .."
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "500",
            fontSize: 12,
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            alignItems: "center",
            flexDirection: "row",
            // marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="ios-location-sharp" size={20} />
          </View>
        )}
        renderRightButton={() => (
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                marginRight: 8,
                backgroundColor: "white",
                padding: 9,
                borderRadius: 30,
                alignItems: "center",
              }}
            >
              <AntDesign
                name="clockcircle"
                style={{ paddingRight: 10 }}
                size={15}
              />
              <Text
                onPress={() => {
                  CityHandler(Name);
                }}
                style={{ fontWeight: "500" }}
              >
                Search
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
