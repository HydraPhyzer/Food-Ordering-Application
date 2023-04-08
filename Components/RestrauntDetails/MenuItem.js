import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const Foods = [
  {
    title: "Burger",
    image: "https://source.unsplash.com/random/400x400/?burger",
    name: "Classic Burger",
    description:
      "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce on a sesame seed bun.",
    price: Math.floor(Math.random() * 10) + 5, // Random price between $5 and $14
  },
  {
    title: "Pizza",
    image: "https://source.unsplash.com/random/400x400/?pizza",
    name: "Pepperoni Pizza",
    description:
      "Thin crust pizza with tangy tomato sauce, melted mozzarella cheese, and spicy pepperoni.",
    price: Math.floor(Math.random() * 10) + 10, // Random price between $10 and $19
  },
  {
    title: "Tacos",
    image: "https://source.unsplash.com/random/400x400/?tacos",
    name: "Chicken Tacos",
    description:
      "Soft corn tortillas filled with juicy grilled chicken, avocado, salsa, and cilantro.",
    price: Math.floor(Math.random() * 10) + 7, // Random price between $7 and $16
  },
  {
    title: "Sushi",
    image: "https://source.unsplash.com/random/400x400/?sushi",
    name: "Spicy Tuna Roll",
    description:
      "Fresh tuna mixed with spicy mayo and rolled with sushi rice and nori seaweed.",
    price: Math.floor(Math.random() * 10) + 12, // Random price between $12 and $21
  },
  {
    title: "Pasta",
    image: "https://source.unsplash.com/random/400x400/?pasta",
    name: "Fettuccine Alfredo",
    description:
      "Creamy fettuccine pasta tossed with butter, Parmesan cheese, and black pepper.",
    price: Math.floor(Math.random() * 10) + 8, // Random price between $8 and $17
  },
  {
    title: "Sandwich",
    image: "https://source.unsplash.com/random/400x400/?sandwich",
    name: "Turkey Club",
    description:
      "Roasted turkey breast, crispy bacon, lettuce, tomato, and mayonnaise on toasted bread.",
    price: Math.floor(Math.random() * 10) + 6, // Random price between $6 and $15
  },
  {
    title: "Steak",
    image: "https://source.unsplash.com/random/400x400/?steak",
    name: "Ribeye Steak",
    description:
      "Juicy, marbled ribeye steak cooked to perfection with garlic butter",
    price: Math.floor(Math.random() * 10) + 18, // Random price between $18 and $27
  },
  {
    title: "Salad",
    image: "https://source.unsplash.com/random/400x400/?salad",
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce, Parmesan cheese, garlic croutons, and creamy Caesar dressing.",
    price: Math.floor(Math.random() * 10) + 5, // Random price between $5 and $14
  },
  {
    title: "Soup",
    image: "https://source.unsplash.com/random/400x400/?soup",
    name: "Tomato Soup",
    description:
      "Creamy tomato soup made with ripe tomatoes, fresh basil, and a touch of cream.",
    price: Math.floor(Math.random() * 10) + 5,
  },
  {
    title: "Sushi",
    image: "https://source.unsplash.com/random/400x400/?sushi",
    name: "Dragon Roll",
    description:
      "A delicious sushi roll made with tempura shrimp, avocado, and eel.",
    price: Math.floor(Math.random() * 10) + 15, // Random price between $15 and $24
  },
  {
    title: "Burger",
    image: "https://source.unsplash.com/random/400x400/?burger",
    name: "Veggie Burger",
    description:
      "A plant-based patty made with black beans, corn, and spices, topped with avocado and salsa.",
    price: Math.floor(Math.random() * 10) + 9, // Random price between $9 and $18
  },
  {
    title: "Pizza",
    image: "https://source.unsplash.com/random/400x400/?pizza",
    name: "Margherita Pizza",
    description:
      "A classic pizza with tomato sauce, fresh mozzarella cheese, and basil leaves.",
    price: Math.floor(Math.random() * 10) + 11, // Random price between $11 and $20
  },
  {
    title: "Tacos",
    image: "https://source.unsplash.com/random/400x400/?tacos",
    name: "Fish Tacos",
    description:
      "Soft tortillas filled with crispy fish, cabbage slaw, and spicy mayo.",
    price: Math.floor(Math.random() * 10) + 12, // Random price between $12 and $21
  },
];

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

export default function MenuItem() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {Foods.map((EachFood, Ind) => {
        return (
          <View style={Styles.MenuItemStyles} key={Ind}>
            <FoodInfo
              Title={EachFood.name}
              Desc={EachFood.description}
              Price={EachFood.price}
            />
            <FoodImage ImageLink={EachFood.image} />
          </View>
        );
      })}
      <Divider width={1} style={{ marginVertical: 20 }} />
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
    <Text style={{ width: 220, textAlign: "justify" }}>{Desc}</Text>
    <Text>{`Price : $ ${Price}`}</Text>
  </View>
);

const FoodImage = ({ ImageLink }) => (
  <View>
    <Image
      source={{ uri: ImageLink }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
