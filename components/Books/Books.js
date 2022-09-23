import { useQuery } from "@apollo/client";
import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { ListItem, SearchBar, Icon } from "@rneui/themed";
import { QUERY_BOOKS } from "../../gql/gql";
import Text from "../../helper/NotosFont";
import LottieView from "lottie-react-native";

//所有書籍頁面
const ViewBooks = () => {
  const { data, loading, error } = useQuery(QUERY_BOOKS);

  if (loading) {
    return (
      <LottieView
        style={{
          height: 500,
          alignSelf: "center",
        }}
        source={require("../../assets/animations/loading.json")}
        autoPlay
        speed={0.5}
        loop={true}
      />
    );
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <SearchBar platform="android" placeholder="輸入書籍名稱 ..." />
      {data.books.books.map((book) => (
        <TouchableOpacity activeOpacity={0.5} key={book.id}>
          <ListItem bottomDivider topDivider>
            <Icon name="book" type="entypo" color="#5CB8E4" />
            <ListItem.Content>
              <ListItem.Title>{book.name}</ListItem.Title>
              <ListItem.Subtitle>
                {book.authorAndPublish.authorName}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content right>
              <ListItem.Title right style={{ color: "green", fontSize: 15 }}>
                {book.authorAndPublish.publishName}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ViewBooks;
