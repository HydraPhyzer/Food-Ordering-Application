import React from "react";
import { View, Text, ImageBackground, Image, Animated } from "react-native";
import { constants, images, FONTS, SIZES, COLORS } from "../../Constants";
import { TextButton } from "../../Components";

export default function Onboarding({ navigation }) {
  const ScrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const onViewChangeRef = React.useRef(({ viewableItems, Changed }) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const Dots = () => {
    const DotsPos = Animated.divide(ScrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {constants.onboarding_screens.map((item, index) => {
          const DotColor = DotsPos.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.lightOrange,
              COLORS.primary,
              COLORS.lightOrange,
            ],
            extrapolate: "clamp",
          });

          const DotWidth = DotsPos.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: DotWidth,
                height: 8,
                backgroundColor: DotColor,
              }}
            />
          );
        })}
      </View>
    );
  };
  function RenderHeaderLoop() {
    return (
      <View
        style={{
          position: "absolute",
          top: SIZES.height > 800 ? 60 : 60,
          left: 0,
          right: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.logo_02}
          resizeMode="contain"
          style={{ width: SIZES.width * 0.5, height: 100 }}
        />
      </View>
    );
  }

  function RenderFooter() {
    return (
      <View style={{ height: 160 }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Dots />
        </View>

        {currentIndex < constants.onboarding_screens.length - 1 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label="Skip"
              buttonContainerStyle={{
                backgroundColor: null,
                marginHorizontal: SIZES.padding,
              }}
              labelStyle={{
                color: COLORS.darkGray2,
              }}
              onPress={() => navigation.replace("SignIn")}
            />
            <TextButton
              label="Next"
              buttonContainerStyle={{
                height: 60,
                width: 200,
                marginHorizontal: SIZES.padding,
                borderRadius: SIZES.radius,
              }}
              onPress={() => {
                flatListRef.current.scrollToIndex({
                  index: currentIndex + 1,
                  animated: true,
                });
              }}
            />
          </View>
        )}

        {currentIndex == constants.onboarding_screens.length - 1 && (
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label="Let's Get Started"
              buttonContainerStyle={{
                height: 60,
                borderRadius: SIZES.radius,
                paddingHorizontal: 50,
              }}
              onPress={() => navigation.replace("SignIn")}
            />
          </View>
        )}
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
      }}
    >
      {RenderHeaderLoop()}

      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: ScrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        keyExtractor={(Item) => `${Item.id}`}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: SIZES.width,
              }}
            >
              <View style={{ flex: 3 }}>
                <ImageBackground
                  source={item.backgroundImage}
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    width: "100%",
                    height: index == 1 ? "92%" : "100%",
                  }}
                >
                  <Image
                    source={item.bannerImage}
                    resizeMode="contain"
                    style={{
                      width: SIZES.width * 0.5,
                      height: SIZES.height * 0.5,
                      marginBottom: -SIZES.padding,
                    }}
                  />
                </ImageBackground>
              </View>

              <View
                style={{
                  flex: 1,
                  marginTop: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: SIZES.radius,
                }}
              >
                <Text style={{ ...FONTS.h1, fontSize: 16, fontWeight: "700" }}>
                  {item.title}
                </Text>

                <Text
                  style={{
                    marginTop: SIZES.radius,
                    textAlign: "center",
                    color: COLORS.darkGray,
                    paddingHorizontal: SIZES.padding,
                    ...FONTS.body3,
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />

      {RenderFooter()}
    </View>
  );
}
