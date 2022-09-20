import React from "react";
import { ImageBackground, Text, View } from "react-native";
import BannerBackground from "../../assets/banner.jpg";

//首頁的最上方背景圖片
const HomeBanner = () => {
  return (
    <View>
      <ImageBackground
        source={BannerBackground}
        style={{
          width: "100%",
          height: 180,
        }}
        resizeMode="cover"
        imageStyle={{ opacity: 0.9 }}
      />
    </View>
  );
};

export default HomeBanner;
