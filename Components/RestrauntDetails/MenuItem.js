import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { CheckBox, Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";


const Styles = StyleSheet.create({
  MenuItemStyles: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 20,
  },

  TitleStyle: {
    fontSize: 15,
    fontWeight: "700",
  },
});

export default function MenuItem({Foods, RestrauntName, HideCheckBox, MarginLeft }) {
  const Dispatch = useDispatch();

  const SelectItem = (Item, CheckBoxValue) => {
    Dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...Item,
        RestrauntName: RestrauntName,
        CheckBoxValue: CheckBoxValue,
      },
    });
  };

  const CartItems = useSelector(
    (State) => State.CartReducer.SelectedItems.Items
  );

  const IsFoodInCart = (Food, CartItem) =>
    Boolean(CartItem.find((Item) => Item.name == Food.name));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {Foods && Foods.map((EachFood, Ind) => {
        return (
          <View style={Styles.MenuItemStyles} key={Ind}>
            {HideCheckBox ? (
              <></>
            ) : (
              <BouncyCheckbox
                size={15}
                fillColor="green"
                style={{
                  alignSelf: "flex-start",
                  marginRight: 10,
                  marginTop: 1,
                }}
                iconStyle={{ borderRadius: 0, borderColor: "black" }}
                isChecked={IsFoodInCart(EachFood, CartItems)}
                onPress={(CheckBoxValue) => SelectItem(EachFood, CheckBoxValue)}
              />
            )}
            <FoodInfo
              Title={EachFood.name}
              Desc={EachFood.description}
              Price={EachFood.price}
            />
            <FoodImage
              ImageLink={EachFood.image}
              MarginLeft={MarginLeft ? MarginLeft : 0}
            />
          </View>
        );
      })}
    </ScrollView>
  );
}

const FoodInfo = ({ Title, Desc, Price }) => (
  <View
    style={{
      width: 240,
      justifyContent: "space-evenly",
      alignItems: "flex-start",
    }}
  >
    <Text style={Styles.TitleStyle}>{Title}</Text>
    <Text style={{ width: 200, textAlign: "justify" }}>{Desc}</Text>
    <Text>{`Price : $ ${Price}`}</Text>
  </View>
);

const FoodImage = ({ ImageLink, MarginLeft }) => (
  <View>
    <Image
      source={{ uri: ImageLink }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: MarginLeft,
      }}
    />
  </View>
);
