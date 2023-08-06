import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { defaultStyles, colors } from "../../styles/styles";
import MenuTab from "./components/MenuTab";
import ProductCard from "./components/RobotCard";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default function Robot() {
  return (
    <View style={defaultStyles}>
      <View>
        <Text>Filter</Text>
      </View>
      <MenuTab />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        horizontal
      >
        {new Array(6).fill(0).map((_, i) => {
          return <ProductCard key={i} />;
        })}
      </ScrollView>
    </View>
  );
}
