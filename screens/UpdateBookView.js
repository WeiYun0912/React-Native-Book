import React from "react";
import { View, ScrollView } from "react-native";
import UpdateBook from "../components/UpdateBook/UpdateBook";

const UpdateBookView = () => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View>
        <UpdateBook />
      </View>
    </ScrollView>
  );
};

export default UpdateBookView;
