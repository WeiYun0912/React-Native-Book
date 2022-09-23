import React from "react";

import { View, ScrollView } from "react-native";

import HomeBanner from "../components/Home/HomeBanner";
import HomeBooks from "../components/Home/HomeBooks";
import HomeMenu from "../components/Home/HomeMenu";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ marginBottom: 10 }}>
        <HomeBanner />
        <HomeMenu navigation={navigation} />
        <HomeBooks />
      </View>
    </ScrollView>
  );
};

export default Home;
