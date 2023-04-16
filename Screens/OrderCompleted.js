import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
// import AnimatedLottieView from "lottie-react-native";
import LottieView from "lottie-react-native";
import { useEffect } from "react";
import { app, db } from "../Firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  orderBy,
  limit,
} from "firebase/firestore";
import { useState } from "react";
import MenuItem from "../Components/RestrauntDetails/MenuItem";

export default function OrderCompleted() {
  const { Items, RestrauntName } = useSelector(
    (State) => State.CartReducer.SelectedItems
  );
  const [LastOrder, setLastOrder] = useState({
    Items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });

  const Total = Items.map((Each) => Number(Each.price)).reduce(
    (Prev, Curr) => Prev + Curr,
    0
  );

  const TotalUSD = Total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "Orders"),
          orderBy("Timestamp", "desc"),
          limit(1)
        );
        querySnapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      } catch (e) {
        alert("Error Getting Document");
      }
    };

    const unsubscribe = fetchData();

    return () => {
      unsubscribe(); // Call the unsubscribe function here
    };
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: Platform.OS === "android" ? 45 : 0,
      }}
    >
      <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/Animations/check-mark.json")}
          speed={0.5}
          loop={false}
          autoPlay
        />
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Your Order at {RestrauntName} Has Been Placed For {TotalUSD}
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItem Foods={LastOrder.Items} HideCheckBox={true} />
        </ScrollView>
        <LottieView
          style={{ height: 150, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/Animations/cooking.json")}
          speed={0.5}
          loop={false}
          autoPlay
        />
      </View>
    </SafeAreaView>
  );
}
