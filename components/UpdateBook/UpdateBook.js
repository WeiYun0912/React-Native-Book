import { useLazyQuery, useMutation } from "@apollo/client";
import { Button, Input } from "@rneui/base";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import ScanBook from "../Common/ScanBook";
import Search from "./Search";
import {
  QUERY_BOOK_BY_BOOKNAME_ISBN,
  MUTATION_UPDATE_BOOK,
} from "../../gql/gql";

const UpdateBook = () => {
  const [searchText, setSearchText] = useState("");
  const [startLoading, setStartLoading] = useState(false);
  const [searchBook, { loading, data, refetch }] = useLazyQuery(
    QUERY_BOOK_BY_BOOKNAME_ISBN
  );
  const [updateBook] = useMutation(MUTATION_UPDATE_BOOK);
  const [bookData, setBookData] = useState({});

  const changeSearchText = (text) => {
    setSearchText(text);
  };

  const searchBookByText = async () => {
    console.log(searchText);
    if (searchText != "") {
      searchBook({ variables: { isbn: searchText } });
      setStartLoading(true);
      setBookData(data);
    }
  };

  useEffect(() => {
    if (!loading && data) {
      setBookData({
        ISBN: data.book[0].ISBN,
        bookName: data.book[0].name,
        authorName: data.book[0].authorAndPublish.authorName,
        publishName: data.book[0].authorAndPublish.publishName,
        position: data.book[0].position,
      });
    }
  }, [loading, data, startLoading]);

  //   console.log(data.book);

  //   <LottieView
  //   style={{
  //     height: 300,
  //     alignSelf: "center",
  //   }}
  //   source={require("../../assets/animations/loading.json")}
  //   autoPlay
  //   speed={0.5}
  //   loop={true}
  // />

  const handleInput = (inputName, text) => {
    setBookData({
      ...bookData,
      [inputName]: text,
    });
  };

  const handleSubmit = () => {
    // handleUpdateBook
    console.log(bookData);
    updateBook({
      variables: {
        input: {
          ISBN: bookData?.ISBN,
          name: bookData?.bookName,
          position: bookData?.position,
        },
      },
    });
    refetch();
    setStartLoading(false);
  };

  return (
    <View>
      {/* {console.log(bookData)} */}
      <Search searchText={searchText} changeSearchText={changeSearchText} />

      <View style={{ padding: 10 }}>
        <Button buttonStyle={{ borderRadius: 5 }} onPress={searchBookByText}>
          搜尋
        </Button>
      </View>

      <ScanBook setSearchText={setSearchText} />

      {startLoading ? (
        <>
          <View style={{ padding: 10 }}>
            <Input
              leftIcon={{ type: "font-awesome", name: "book" }}
              placeholder="書籍名稱"
              label="書籍名稱"
              value={bookData?.bookName}
              onChangeText={(text) => handleInput("bookName", text)}
              //   onChange={t}
            />
            <Input
              leftIcon={{ type: "font-awesome", name: "book" }}
              placeholder="書籍位置"
              label="書籍位置"
              value={bookData?.position}
              onChangeText={(text) => handleInput("position", text)}
              //   onChange={t}
            />
            <Input
              leftIcon={{ type: "font-awesome", name: "book" }}
              placeholder="作者名稱"
              label="作者名稱"
              value={bookData?.authorName}
              disabled
              //   onChangeText={t}
            />
            <Input
              leftIcon={{ type: "font-awesome", name: "book" }}
              placeholder="出版社名稱"
              label="出版社名稱"
              value={bookData?.publishName}
              disabled
            />
          </View>
          <View style={{ padding: 10 }}>
            <Button
              buttonStyle={{ borderRadius: 5 }}
              color="warning"
              onPress={handleSubmit}
            >
              更新
            </Button>
          </View>
        </>
      ) : null}
    </View>
  );
};

export default UpdateBook;
