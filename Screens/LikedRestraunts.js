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
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";

const APIKEY =
  "zVHspvReyc-yx-oNVu-Xp0EIM5OvqdgUipY3riVhjWniukm5DvFbliz_GqILDWmIPL3kpnDeItt0SAVo0mBgO9WWS6b-yxnkpIgqQVyQy6cDd9Yr2DfG-MfrQPwqZHYx";

const SaveRestraunt = async (Detail, MyUser, Dispatch, Status) => {
  const docRef = doc(db, MyUser.uid, "FavouriteRestraunts");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    !Status
      ? updateDoc(docRef, {
          Restraunts: arrayUnion(Detail.id),
        }).then(function () {
          UodateData();
        })
      : updateDoc(docRef, {
          Restraunts: arrayRemove(Detail.id),
        }).then(function () {
          UodateData();
        });
  } else {
    setDoc(docRef, {
      Restraunts: arrayUnion(Detail.id),
    }).then(function () {
      UodateData();
    });
  }

  let UodateData = async () => {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const Res = docSnap.data();

      Dispatch({
        type: "ADD_FAV",
        payload: {
          ID: [...Res.Restraunts],
        },
      });
    } else {
      alert("Error Fetching Document");
    }
  };
};

export default function LikedRestraunts({ navigation }) {
  const [RestrauntData, setRestrauntData] = useState([]);

  const GetRestrauntData = async (Fav) => {
    const Data = await Promise.all(
      Fav.map(async (Each) => {
        const YelpURL = `https://api.yelp.com/v3/businesses/${Each}`;
        const Options = {
          headers: {
            Authorization: `Bearer ${APIKEY}`,
          },
        };

        try {
          const Res = await fetch(YelpURL, Options);
          const JSON = await Res.json();
          return JSON;
        } catch (error) {
          console.log(error);
        }
      })
    );

    setRestrauntData(Data);
  };

  const FavouruteRestraunts = useSelector(
    (State) => State.CartReducer.FavouruteRestraunts
  );
  const MyUser = useSelector((State) => State.CartReducer.User);

  useEffect(() => {
    GetRestrauntData(FavouruteRestraunts);
  }, []);

  let Dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
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
          source={require("../assets/Animations/love-icon-animation.json")}
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
            Favoutrie Restraunts
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: COLORS.darkGray,
              marginTop: SIZES.base,
            }}
          >
            Find all Your Favourite Restraunts at One Place, and Order from
            Them.
          </Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {RestrauntData.map((Each, Ind) => {
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
                  source={{ uri: Each.image_url }}
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
                  onPress={() =>
                    SaveRestraunt(
                      Each,
                      MyUser,
                      Dispatch,
                      FavouruteRestraunts.includes(Each.id)
                    )
                  }
                >
                  <MaterialCommunityIcons
                    name="heart-circle-outline"
                    size={30}
                    color={
                      !FavouruteRestraunts.includes(Each.id) ? "red" : "black"
                    }
                  />
                </TouchableOpacity>
              </>
              <View style={{ marginHorizontal: 10 }}>
                <Text>
                  <Text style={{ fontWeight: "600" }}>Name : </Text>
                  {Each.name}
                </Text>
                <Text>
                  <Text style={{ fontWeight: "600" }}>Phone : </Text>
                  {Each.display_phone}
                </Text>
                <Text>
                  <Text style={{ fontWeight: "600" }}>Closed : </Text>
                  {Each.is_closed ? "Yes" : "No"}
                </Text>
                <Text>
                  <Text style={{ fontWeight: "600" }}>Rating : </Text>
                  {Each.rating}
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
