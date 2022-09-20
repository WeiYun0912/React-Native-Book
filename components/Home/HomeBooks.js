import React from "react";
import { View, ScrollView, TouchableOpacity, Image } from "react-native";
import Text from "../../helper/NotosFont";
import BooksData from "../../helper/Books.json";

//首頁的 新增的書籍 ScrollView
const HomeBooks = () => {
  return (
    <View
      style={{
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#fff",
        marginTop: 40,
      }}
    >
      <Text style={{ fontSize: 25 }}>新增的書籍</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        {BooksData.map((book) => (
          <View key={book.id} style={{ marginRight: 20 }}>
            <TouchableOpacity activeOpacity={0.5}>
              <Image
                source={{
                  uri: book.uri,
                }}
                style={{
                  width: 200,
                  height: 300,
                  borderRadius: 8,
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeBooks;
