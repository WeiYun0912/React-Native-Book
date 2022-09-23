import React from "react";
import { TouchableOpacity } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import Text from "../../helper/NotosFont";

const Books = ({ data, startSearching }) => {
  if (data?.book.length == 0) {
    return (
      <Text style={{ fontSize: 24, color: "#ff0000", textAlign: "center" }}>
        找尋不到書籍資料
      </Text>
    );
  }

  return (
    <>
      {data?.book.map((book) => (
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
    </>
  );
};

export default Books;
