import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon, ListItem } from "@rneui/base";
import Text from "../../helper/NotosFont";

const Book = ({ bookData, errorMessage }) => {
  return (
    <>
      {errorMessage != "" ? (
        <Text
          style={{
            fontSize: 18,
            color: "red",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          {errorMessage}
        </Text>
      ) : null}
      {bookData.bookName != undefined ? (
        <TouchableOpacity activeOpacity={0.5}>
          <ListItem bottomDivider topDivider>
            <Icon name="book" type="entypo" color="#5CB8E4" />
            <ListItem.Content>
              <ListItem.Title>{bookData?.bookName}</ListItem.Title>
              <ListItem.Subtitle>{bookData?.author}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content right>
              <ListItem.Title right style={{ color: "green", fontSize: 15 }}>
                {bookData?.publish}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default Book;
