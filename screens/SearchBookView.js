import React from "react";
import { View, ScrollView } from "react-native";
import SearchBook from "../components/SearchBook/SearchBook";

const SearchBookView = () => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View>
        <SearchBook />
      </View>
    </ScrollView>
  );
};

export default SearchBookView;
