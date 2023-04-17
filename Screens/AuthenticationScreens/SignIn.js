import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import AuthLayout from "./AuthLayout";
import { SIZES, COLORS, icons } from "../../Constants";
import FormInput from "../../Components/FormInput";
import { utils } from "../../Utils";
import TextButton from "../../Components/TextButton";
import TextIconButton from "../../Components/TextIconButton";

export default function SignIn({ navigation }) {
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [EmailError, setEmailError] = React.useState("");
  const [ShowPassword, setShowPassword] = React.useState(false);

  function IsEnabledSignIn() {
    return Email != "" && Password != "" && EmailError == "";
  }
  return (
    <AuthLayout
      Title="Let's Sign You In"
      SubTitle="Welcome Back, You Have Been Missed"
    >
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        <FormInput
          label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={(value) => {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={EmailError}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                source={
                  Email == "" || (Email != "" && EmailError == "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    Email == "" || (Email != "" && EmailError == "")
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <FormInput
          label="Password"
          secureTextEntry={ShowPassword}
          autoCompleteType="password"
          onChange={(value) => {
            setPassword(value);
          }}
          containerStyle={{ marginTop: SIZES.radius }}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              onPress={() => setShowPassword(!ShowPassword)}
            >
              <Image
                source={ShowPassword ? icons.eye_close : icons.eye}
                style={{ height: 20, width: 20, tintColor: COLORS.gray }}
              />
            </TouchableOpacity>
          }
        />

        <TextButton
          label="SignIn"
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
            backgroundColor: IsEnabledSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          disabled={IsEnabledSignIn() ? false : true}
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.darkGray }}>
            Don't Have an Account ?{" "}
          </Text>

          <TextButton
            label="SignUp"
            buttonContainerStyle={{ marginLeft: 3, backgroundColor: null }}
            labelStyle={{ color: COLORS.primary }}
            onPress={() => navigation.replace("SignUp")}
          />
        </View>

        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: "center",
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
          icon={icons.google}
          iconPosition="LEFT"
          iconStyle={{ tintColor: null }}
          label="Continue With Google"
          labelstyle={{ marginLeft: SIZES.radius }}
          onPress={() => alert("Google")}
        />
      </View>
    </AuthLayout>
  );
}
