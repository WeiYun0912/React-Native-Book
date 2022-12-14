import React from "react";
import { TouchableOpacity } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import Text from "../../helper/NotosFont";

const Books = ({
  bookDataByNameAndISBN,
  bookDataByAuthorAndPublish,
  selectedIndex,
}) => {
  if (
    bookDataByNameAndISBN?.book.length == 0 ||
    bookDataByAuthorAndPublish?.filterBook.length == 0
  ) {
    return (
      <Text style={{ fontSize: 24, color: "#ff0000", textAlign: "center" }}>
        找尋不到書籍資料
      </Text>
    );
  }

  return (
    <>
      {selectedIndex == 0 || selectedIndex == 3 ? (
        <BookDataByNameAndISBN bookDataByNameAndISBN={bookDataByNameAndISBN} />
      ) : null}

      {selectedIndex == 1 || selectedIndex == 2 ? (
        <BookDataByAuthorAndPublish
          bookDataByAuthorAndPublish={bookDataByAuthorAndPublish}
        />
      ) : null}
    </>
  );
};

const BookDataByNameAndISBN = ({ bookDataByNameAndISBN }) => {
  return (
    <>
      {bookDataByNameAndISBN?.book.map((book) => (
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
      ))}
    </>
  );
};

const BookDataByAuthorAndPublish = ({ bookDataByAuthorAndPublish }) => {
  return (
    <>
      {bookDataByAuthorAndPublish?.filterBook.map((books) => {
        return books?.books.map((book) => (
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
        ));
      })}
    </>
  );
};

export default Books;
