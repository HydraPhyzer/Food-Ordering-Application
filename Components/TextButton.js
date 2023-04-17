import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../Constants";

const TextButton = ({ label, labelStyle, buttonContainerStyle, onPress,disabled }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, ...labelStyle }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
