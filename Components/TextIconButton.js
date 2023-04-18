import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "../Constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const Styles = StyleSheet.create({
  image: {
    marginLeft: 5,
    width: 20,
    height: 20,
    tintColor: COLORS.black,
  },
});

export default function TextIconButton({
  containerStyle,
  label,
  labelstyle,
  icon,
  iconPosition,
  iconStyle,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {iconPosition == "LEFT" && (
        <Image source={icon} style={{ ...Styles.image, ...iconStyle }} />
      )}

      <Text style={{ ...labelstyle }}>{label}</Text>

      {iconPosition == "RIGHT" && (
        <Image source={icon} style={{ ...Styles.image, ...iconStyle }} />
      )}
    </TouchableOpacity>
  );
}
