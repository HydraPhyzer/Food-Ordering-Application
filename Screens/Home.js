import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../Components/HeaderTabs";
import SearchBar from "../Components/SearchBar";
import Categories from "../Components/Categories";
import RestrauntItem from "../Components/RestrauntItem";

export default function Home() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#eee",
        flex: 1,
        paddingTop: Platform.OS === "android" ? 45 : 0,
      }}
    >
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestrauntItem />
        <RestrauntItem />
        <RestrauntItem />
      </ScrollView>
    </SafeAreaView>
  );
}
