import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AuthLayout from "./AuthLayout";
import { SIZES, COLORS, icons } from "../../Constants";
import FormInput from "../../Components/FormInput";
import TextButton from "../../Components/TextButton";
import TextIconButton from "../../Components/TextIconButton";
import { utils } from "../../Utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { useDispatch } from "react-redux";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase";

export default function SignUp({ navigation }) {
  const [UserName, setUserName] = React.useState("");
  const [UserNameError, setUserNameError] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [EmailError, setEmailError] = React.useState("");
  const [ShowPassword, setShowPassword] = React.useState(false);
  const [PasswordError, setPasswordError] = React.useState(false);

  function IsEnabledSignUp() {
    return (
      Email != "" &&
      UserName != "" &&
      Password != "" &&
      EmailError == "" &&
      PasswordError == "" &&
      UserNameError == ""
    );
  }

  auth.onAuthStateChanged((Use) => {
    Dispatch({
      type: "ADD_USER",
      payload: {
        User: Use,
      },
    });
  });
  const Dispatch = useDispatch();

  let SignUpWithEmailandPassword = async () => {
    createUserWithEmailAndPassword(auth, Email, Password)
      .then(async (userCredential) => {
        const User = userCredential.user;

        Dispatch({
          type: "ADD_USER",
          payload: {
            User: User,
          },
        });

        navigation.navigate("Home");

        await setDoc(doc(db, User.uid, User.uid), {
          UserID:User.uid,
          Name: UserName,
          Email:Email
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(`${errorCode} Means ${errorMessage}`);
      });
  };
  return (
    <AuthLayout
      Title="Getting Started"
      SubTitle="Create an Account to Continue"
    >
      <View style={{ flex: 1, marginTop: SIZES.padding }}>
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
          label="Username"
          onChange={(value) => {
            setUserName(value);
          }}
          containerStyle={{ marginTop: SIZES.radius }}
          errorMsg={UserNameError}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  UserName == "" || (UserName != "" && UserNameError == "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    UserName == "" || (UserName != "" && UserNameError == "")
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
            utils.validatePassword(value, setPasswordError);
            setPassword(value);
          }}
          errorMsg={PasswordError}
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
          label="SignUp"
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
            backgroundColor: IsEnabledSignUp()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          disabled={IsEnabledSignUp() ? false : true}
          onPress={SignUpWithEmailandPassword}
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.darkGray }}>
            Already Have an Account ?{" "}
          </Text>

          <TextButton
            label="SignIn"
            buttonContainerStyle={{ marginLeft: 3, backgroundColor: null }}
            labelStyle={{ color: COLORS.primary }}
            onPress={() => navigation.navigate("SignIn")}
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
          onPress={SignUpWithEmailandPassword}
        />
      </View>
    </AuthLayout>
  );
}
