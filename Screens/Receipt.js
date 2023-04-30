import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES, COLORS } from "../Constants";
import LottieView from "lottie-react-native";
import BottomTabs from "../Components/Home/BottomTabs";
import { db } from "../Firebase";
import { ScrollView } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  collection,
  query,
  getDocs,
  where,
  getCountFromServer,
} from "firebase/firestore";

const APIKEY =
  "zVHspvReyc-yx-oNVu-Xp0EIM5OvqdgUipY3riVhjWniukm5DvFbliz_GqILDWmIPL3kpnDeItt0SAVo0mBgO9WWS6b-yxnkpIgqQVyQy6cDd9Yr2DfG-MfrQPwqZHYx";

export default function OrdersHistory({ navigation }) {
  const [PastOrders, setPastOrders] = useState([]);

  const MyUser = useSelector((State) => State.CartReducer.User);

  let GetPastOrders = async () => {
    const coll = collection(db, MyUser.uid);
    const snapshot = await getCountFromServer(coll);
    console.log("count: ", snapshot.data().count);

    let Data = [];
    const q = query(collection(db, MyUser.uid),where("Items", "!=", null));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      Data.push(...doc.data().Items);
    });
    setPastOrders(Data);
  };

  useEffect(() => {
    GetPastOrders().then(() => {
      console.log(PastOrders);
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        backgroundColor: COLORS.white,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          alignItems: "center",
          position: "relative",
          marginVertical: SIZES.height > 800 ? 20 : 20,
        }}
      >
        <LottieView
          style={{ height: 200 }}
          source={require("../assets/Animations/history.json")}
          autoPlay
          speed={30}
          duration={3000}
        />
        <View
          style={{
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text style={{ textAlign: "center", fontWeight: "600" }}>
            Orders History
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: COLORS.darkGray,
              marginTop: SIZES.base,
            }}
          >
            Find all Your History Here About What You Have Ordered in Past
          </Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {PastOrders.map((Each, Ind) => {
          return (
            <View
              key={Ind}
              style={{
                borderColor: COLORS.lightGray1,
                borderWidth: 1,
                margin: 5,
                borderRadius: SIZES.radius / 2,
                padding: SIZES.padding / 2,
                flexDirection: "row",
              }}
            >
              <>
                <Image
                  source={{ uri: Each.image }}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                  borderRadius={SIZES.radius / 2}
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: "white",
                    padding: 1,
                    borderRadius: 5,
                  }}
                >
                  <MaterialCommunityIcons
                    name="heart-circle-outline"
                    size={30}
                    // color={
                    //   !FavouruteRestraunts.includes(Each.id) ? "red" : "black"
                    // }
                  />
                </TouchableOpacity>
              </>
              <View style={{ marginHorizontal: 10 }}>
                <Text>
                  <Text style={{ fontWeight: "600" }}>Restraunt : </Text>
                  {Each.RestrauntName}
                </Text>
                <Text>
                  <Text style={{ fontWeight: "600" }}>Title : </Text>
                  {Each.title}
                </Text>
                <Text>
                  <Text style={{ fontWeight: "600" }}>Name : </Text>
                  {Each.name}
                </Text>
                <Text>
                  <Text style={{ fontWeight: "600" }}>Price : </Text>
                  {Each.price}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <View style={{ backgroundColor: "white" }}>
        <BottomTabs navigation={navigation} mv={5} mh={15} />
      </View>
    </View>
  );
}
