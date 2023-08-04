import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";
import { navigationRef } from "../router/RootNavigation";

const navigationIcon = [
  {
    path: "home",
    icon: "home",
  },
  {
    path: "drone",
    icon: "drone",
  },
  {
    path: "account",
    icon: "account-outline",
  },
];

export default function Footer() {
  const navigation = useNavigation();
  const [currentScreen, setCurrentScreen] = useState();
  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      setCurrentScreen(navigationRef.current?.getCurrentRoute()?.name);
    });
    return unsubscribe;
  }, []);
  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        width: "100%",
        padding: 5,
        justifyContent: "center",
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      }}
    >
      {navigationIcon.map((n, i) => {
        return (
          <TouchableOpacity
            key={i}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(n.path)}
          >
            <Avatar.Icon
              icon={n.icon}
              color={
                n.path === currentScreen ? colors.primary : colors.secondary
              }
              style={{
                backgroundColor:
                  n.path === currentScreen ? colors.activeColor : colors.color2,
                padding: 10,
                borderRadius: 5,
                marginHorizontal: 5,
              }}
              size={40}
            ></Avatar.Icon>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
