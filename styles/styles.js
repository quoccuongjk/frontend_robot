import { StyleSheet, Platform, StatusBar } from "react-native";

export const colors = {
  color1: "#c70049",
  color1_light: "rgba(227,25,99)",
  color2_light2: "rgba(199,0,73,0.8)",
  color2: "white",
  color3: "rgb(45,45,45)",
  color4: "transparent",
  color5: "#f2f2f2",
  color6: "#f7f7f7",
  primary: "#83CF5D",
  activeColor: "#E8F6E1",
  secondary: "rgb(171,171,171)",
};

export const defaultStyles = {
  padding: 35,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  flex: 1,
  backgroundColor: colors.color2,
};

export const inputStyling = {
  height: 45,
  borderColor: "gray",
  borderWidth: 1,
  borderRadius: 5,
  padding: 15,
}
