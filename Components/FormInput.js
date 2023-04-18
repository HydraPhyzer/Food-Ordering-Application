import { View, Text, TextInput } from "react-native";
import React from "react";
import { SIZES, COLORS } from "../Constants";
import { color } from "react-native-reanimated";

const FormInput = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  errorMsg = "",
  autoCapitalize = "none",
  disabled,
  initvalue
}) => {
  return (
    <View style={{ ...containerStyle }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: COLORS.gray }}>{label}</Text>
        <Text style={{ color: COLORS.red }}>{errorMsg}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          height: 55,
          paddingHorizontal: SIZES.base,
          marginTop: SIZES.base,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        {prependComponent}

        <TextInput
          editable={disabled}
          style={{ flex: 1, ...inputStyle }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={(Tex) => onChange(Tex)}
          value={initvalue}
        />

        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
