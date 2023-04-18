import { View, Text, Image } from "react-native";
import React from "react";
import { images, SIZES, COLORS } from "../../Constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function AuthLayout({
  Title,
  SubTitle,
  TitleContainerStyle,
  children,
}) {
  return (
    <View
      style={{
        flex: 1,
        // paddingVertical: SIZES.padding,
        paddingTop: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          // paddingHorizontal: SIZES.padding,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            alignItems: "center",
            position: "relative",
            marginVertical: SIZES.height > 800 ? 30 : 30,
          }}
        >
          <Image
            source={images.logo_02}
            resizeMode="contain"
            style={{ height: 100, width: 200 }}
          />
        </View>

        <View style={{ marginTop: SIZES.padding, ...TitleContainerStyle }}>
          <Text style={{ textAlign: "center" }}>{Title}</Text>
          <Text
            style={{
              textAlign: "center",
              color: COLORS.darkGray,
              marginTop: SIZES.base,
            }}
          >
            {SubTitle}
          </Text>
        </View>

        {children}
      </KeyboardAwareScrollView>
    </View>
  );
}
