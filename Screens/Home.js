import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../Components/Home/HeaderTabs";
import SearchBar from "../Components/Home/SearchBar";
import Categories from "../Components/Home/Categories";
import RestrauntItem, {
  LocalRestaurants,
} from "../Components/Home/RestrauntItem";
import BottomTabs from "../Components/Home/BottomTabs";
import { useSelector } from "react-redux";

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
// LogBox.ignoreAllLogs();

const APIKEY =
  "zVHspvReyc-yx-oNVu-Xp0EIM5OvqdgUipY3riVhjWniukm5DvFbliz_GqILDWmIPL3kpnDeItt0SAVo0mBgO9WWS6b-yxnkpIgqQVyQy6cDd9Yr2DfG-MfrQPwqZHYx";

export default function Home({ navigation }) {
  const [RestrauntData, setRestrauntData] = useState([...LocalRestaurants]);
  const [City, setCity] = useState("SanDiego");
  const [ActiveTab, setActiveTab] = useState("Delivery");

  const MyUser = useSelector((State) => State.CartReducer.User);

  const GetRestrauntData = async () => {
    const YelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${City}`;
    const Options = {
      headers: {
        Authorization: `Bearer ${APIKEY}`,
      },
    };

    try {
      const Res = await fetch(YelpURL, Options);
      const JSON = await Res.json();
      return setRestrauntData(
        JSON.businesses.filter((Each) =>
          Each.transactions.includes(ActiveTab.toLowerCase())
        )
      );
    } catch (error) {
      const Res = await fetch(YelpURL, Options);
      const JSON = await Res.json();
      setRestrauntData(JSON.businesses);
    }
  };

  useEffect(() => {
    if (Object.keys(MyUser).length==0) {
      navigation.navigate("SignIn");
    } else {
      GetRestrauntData();
      if (!City) {
        setCity("SanDiego");
      }
    }
  }, [City, ActiveTab]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#eee",
        flex: 1,
        paddingTop: Platform.OS === "android" ? 45 : 0,
      }}
    >
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs ActiveTab={ActiveTab} setActiveTab={setActiveTab} />
        <SearchBar CityHandler={setCity} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestrauntItem RestrauntsData={RestrauntData} navigation={navigation} />
      </ScrollView>

      <View style={{ backgroundColor: "white" }}>
        <BottomTabs navigation={navigation} mv={5} mh={15} />
      </View>
    </SafeAreaView>
  );
}
