import { View, Text, Image } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function About(Props) {
  const { Name, ImageURL, Price, Reviews, Rating, Categories } =
    Props.route.params;

  const FormattedCategories = Categories.map((Cat) => Cat.title).join(" . ");

  const Desc = `${FormattedCategories} ${
    Price ? " . " + Price : ""
  } 💵 ${Rating} ⭐ (${Reviews}+)`;

  return (
    <View>
      <RestrauntImage ImageURI={ImageURL} />
      <RestrauntTitle Title={Name} />
      <RestrauntDesc Desc={Desc} />

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 10,
          padding: 5,
          alignSelf: "flex-start",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 5,
        }}
      >
        <MaterialCommunityIcons
          name="food"
          color="#1abc9c"
          size={20}
          style={{ paddingRight: 20 }}
        />
        <MaterialCommunityIcons
          name="food-turkey"
          color="#e74c3c"
          size={20}
          style={{ paddingRight: 20 }}
        />
        <MaterialCommunityIcons
          name="food-fork-drink"
          color="#f1c40f"
          size={20}
          style={{ paddingRight: 20 }}
        />
        <MaterialCommunityIcons
          name="food-drumstick"
          color="#e67e22"
          size={20}
          style={{ paddingRight: 0 }}
        />
      </View>
    </View>
  );
}

const RestrauntImage = ({ ImageURI }) => (
  <>
    <Image
      source={{
        uri: ImageURI,
      }}
      style={{ width: "100%", height: 200 }}
      borderRadius={5}
    />
  </>
);

const RestrauntTitle = ({ Title }) => (
  <Text
    style={{
      fontSize: 15,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 10,
      backgroundColor: "black",
      color: "white",
      padding: 5,
      alignSelf: "flex-start",
      borderRadius: 3,
    }}
  >
    {Title}
  </Text>
);

const RestrauntDesc = ({ Desc }) => (
  <Text
    style={{
      fontSize: 12,
      fontWeight: "400",
      marginTop: 5,
      marginHorizontal: 10,
      padding: 5,
      alignSelf: "flex-start",
      borderRadius: 3,
    }}
  >
    {Desc}
  </Text>
);
