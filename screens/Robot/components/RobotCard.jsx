import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import React from "react";
import { ImagesAssets } from "../../../assets/ImageAssets";
const window = Dimensions.get("window");
const imageWidth = window.width / 3 + 30;
const imageHeight = window.width / 3;
export default function ProductCard({}) {
  return (
    <View>
      <View
        style={{
          width: (window.width / 100) * 33.333 ,
          alignItems: "center",
          justifyContent: "center",
          height: (window.width / 100) * 33.333 ,
          margin: 10,
          borderRadius: 20,
          backgroundColor: "rgb(248,248,248)",
        }}
      >
        <Image
          source={ImagesAssets.robot}
          style={{
            width: "70%",
            resizeMode: "contain",
          }}
        />
      </View>
      <View
        style={{
          marginLeft: 20,
        }}
      >
        <Text style={{ fontWeight: 800, fontSize: 14 }}>Title</Text>
        
      </View>
    </View>
  );
}
