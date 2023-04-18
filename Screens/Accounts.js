import { View } from "react-native";
import React, { useEffect } from "react";
import AuthLayout from "./AuthenticationScreens/AuthLayout";
import { SIZES, icons, COLORS } from "../Constants";
import FormInput from "../Components/FormInput";
import BottomTabs from "../Components/Home/BottomTabs";
import { useSelector, useDispatch } from "react-redux";
import { TextButton } from "../Components";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

export default function Accounts({ navigation }) {
  const [Email, setEmail] = React.useState("");
  const [Name, setName] = React.useState("");
  const [UserId, setUserId] = React.useState("");

  const MyUser = useSelector((State) => State.CartReducer.User);

  useEffect(() => {
    let FetchData = async () => {
      const docRef = doc(db, MyUser.uid, MyUser.uid);
      const docSnap = await getDoc(docRef);

      console.log("Document data:", docSnap.data());
      console.log("Copy data:", MyUser);
      if (docSnap.exists()) {
        const { Name, Email, UserID } = docSnap.data();
        setUserId(UserID);
        setEmail(Email);
        setName(Name);
      }
    };

    const unsubscribe = FetchData();

    return () => {
      unsubscribe();
    };
  }, []);

  const Dispatch = useDispatch();
  let Logouot = () => {
    Dispatch({
      type: "ADD_USER",
      payload: {
        User: {},
      },
    });
    navigation.navigate("SignIn");
  };

  return (
    <AuthLayout
      Title="User Details"
      SubTitle="Found all Your Accounts Details at One Place"
    >
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        <FormInput
          label="User ID"
          keyboardType="email-address"
          disabled={false}
          initvalue={UserId}
        />

        <FormInput
          label="Name"
          containerStyle={{ marginTop: SIZES.radius }}
          disabled={false}
          initvalue={Name}
        />
        <FormInput
          label="Email"
          containerStyle={{ marginTop: SIZES.radius }}
          disabled={false}
          initvalue={Email}
        />
      </View>

      <TextButton
        label="Logout"
        buttonContainerStyle={{
          height: 55,
          alignItems: "center",
          marginVertical: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.red,
        }}
        onPress={Logouot}
      />

      <View style={{ backgroundColor: "white" }}>
        <BottomTabs navigation={navigation} mv={5} mh={0} />
      </View>
    </AuthLayout>
  );
}
