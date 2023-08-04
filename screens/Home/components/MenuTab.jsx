import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../../styles/styles";

const styles = StyleSheet.create({
  menuTab: {
    flexDirection: "row",
    marginTop: 50,
    paddingVertical: 20,
    justifyContent: "center",
  },
  menuTabText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
    color: "#B2B4BB",
  },
  menuTabTextActive: {
    color: colors.primary,
  },
  menuTabCircle: {
    height: 5,
    width: 5,
    borderRadius: 30,
    backgroundColor: "#77C94E",
    marginTop: 5,
    alignSelf: "center",
  },
});
export default function MenuTab() {
  return (
    <View>
      <View style={styles.menuTab}>
        <View>
          <Text style={styles.menuTabText}>Thu hoach</Text>
          {/* <View style={styles.menuTabCircle}></View> */}
        </View>
        <View>
          <Text style={{ ...styles.menuTabText, ...styles.menuTabTextActive }}>
            Chua thu hoach
          </Text>
          <View style={styles.menuTabCircle}></View>
        </View>
      </View>
    </View>
  );
}
