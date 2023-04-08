import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const LocalRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

export default function RestrauntItem({ RestrauntsData, navigation }) {
  return RestrauntsData && RestrauntsData.length > 0 ? (
    RestrauntsData.map((EachItem, Ind) => (
      <TouchableOpacity
        activeOpacity={1}
        style={{ marginBottom: 0 }}
        key={Ind}
        onPress={() => navigation.navigate("RestrauntDetail",{
          Name:EachItem.name,
          ImageURL:EachItem.image_url,
          Price:EachItem.price,
          Reviews:EachItem.review_count,
          Rating:EachItem.rating,
          Categories:EachItem.categories
        })}
      >
        <View style={{ marginTop: 15, padding: 15, backgroundColor: "white" }}>
          <RestrauntImage ImageURI={EachItem.image_url} />
          <RestrauntInfo Name={EachItem.name} Rating={EachItem.rating} />
        </View>
      </TouchableOpacity>
    ))
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50%",
      }}
    >
      <ActivityIndicator size="large" color="black" />
      <Text style={{ marginTop: 20 }}>Please Wait. Searching Restraunt</Text>
    </View>
  );
}

const RestrauntImage = ({ ImageURI }) => (
  <>
    <Image
      source={{
        uri: ImageURI,
      }}
      style={{ width: "100%", height: 180 }}
      borderRadius={5}
    />
    <TouchableOpacity
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        backgroundColor: "white",
        padding: 1,
        borderRadius: 5,
      }}
    >
      <MaterialCommunityIcons
        name="heart-circle-outline"
        size={25}
        color="red"
      />
    </TouchableOpacity>
  </>
);

const RestrauntInfo = ({ Name, Rating }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: 500 }}>{Name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-50 Min</Text>
    </View>

    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 12, fontWeight: "500" }}>{Rating}</Text>
    </View>
  </View>
);
