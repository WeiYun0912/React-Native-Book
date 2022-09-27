import { useLazyQuery } from "@apollo/client";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import { QUERY_BOOKS } from "../../gql/gql";
import Text from "../../helper/NotosFont";
import LottieView from "lottie-react-native";
import { useState, useEffect } from "react";
import { Button } from "@rneui/base";

//所有書籍頁面

let page = 0;

const ViewBooks = ({ refreshing }) => {
  const [filterVariables, setFilterVariables] = useState({
    filter: {
      start: 0,
      end: 10,
    },
  });

  const [getBooks, { data, loading, error, refetch }] =
    useLazyQuery(QUERY_BOOKS);

  useEffect(() => {
    getBooks({ variables: filterVariables });
    if (refreshing) {
      refetch();
    }
  }, [filterVariables, refreshing]);

  if (error) {
    return <Text>{error}</Text>;
  }

  const handlePage = (pageAction) => {
    if (pageAction === "next") {
      page += 1;
    } else if (pageAction === "prev") {
      page -= 1;
    }

    setFilterVariables({
      filter: {
        start: page * 20,
        end: 10, //limit
      },
    });
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
        }}
      >
        <Button onPress={() => handlePage("prev")} disabled={page == 0}>
          上一頁
        </Button>
        <Button onPress={() => handlePage("next")}>下一頁</Button>
      </View>
      {!loading && data ? (
        data?.books.books.map((book) => (
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
                <ListItem.Subtitle>書籍位置:{book.position}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        ))
      ) : (
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
      )}
    </View>
  );
};

export default ViewBooks;
