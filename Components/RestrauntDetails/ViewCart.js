import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import OrderItems from "./OrderItems";
import { ScrollView } from "react-native-gesture-handler";
import { app, db } from "../../Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import LottieView from "lottie-react-native";

export default function ViewCart({ navigation }) {
  const [ModelVisible, setModelVisible] = useState(false);
  const [Loading, setLoading] = useState(false);
  const { Items, RestrauntName } = useSelector(
    (State) => State.CartReducer.SelectedItems
  );

  const Total = Items.map((Each) => Number(Each.price)).reduce(
    (Prev, Curr) => Prev + Curr,
    0
  );

  const TotalUSD = Total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  const AddOrderToFirebase = async () => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "Orders"), {
        Items: Items,
        RestrauntName: RestrauntName,
        Timestamp: serverTimestamp(),
      }).then(() => {
        setTimeout(() => {
          setLoading(false);
          setModelVisible(false);
          navigation.navigate("OrderCompleted");
        }, 2500);
      });
    } catch (e) {
      alert("Error Adding Document");
    }
  };

  const Styles = StyleSheet.create({
    ModalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },

    ModalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },

    RestaurantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },

    SubtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    SubtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
  });

  const ModelCheckoutContent = () => {
    return (
      <>
        <View style={Styles.ModalContainer}>
          <View style={Styles.ModalCheckoutContainer}>
            <Text style={Styles.RestaurantName}>{RestrauntName}</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
              {Items.map((item, index) => (
                <OrderItems key={index} Item={item} />
              ))}
            </ScrollView>
            <View style={Styles.SubtotalContainer}>
              <Text style={Styles.SubtotalText}>Subtotal</Text>
              <Text>{TotalUSD}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                }}
                onPress={() => {
                  AddOrderToFirebase();
                  setModelVisible(false);
                }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>Checkout</Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 15,
                    top: "60%",
                  }}
                >
                  {Total ? TotalUSD : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <Modal
        animationType="slide"
        visible={ModelVisible}
        transparent={true}
        onRequestClose={() => setModelVisible(false)}
      >
        {ModelCheckoutContent()}
      </Modal>
      {Total ? (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            position: "absolute",
            bottom: 10,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                padding: 13,
                borderRadius: 30,
                width: 320,
              }}
              onPress={() => setModelVisible(true)}
            >
              <Text style={{ color: "white", fontSize: 15 }}>ViewCart</Text>

              <Text
                style={{
                  position: "absolute",
                  right: 20,
                  color: "white",
                  fontSize: 15,
                  top: "60%",
                }}
              >
                {Total ? TotalUSD : ""}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}

      {Loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <LottieView
            style={{ height: 200 }}
            source={require("../../assets/Animations/scanner.json")}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
