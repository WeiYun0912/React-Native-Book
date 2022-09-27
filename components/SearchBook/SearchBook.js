import { useLazyQuery } from "@apollo/client";

import React, { useState } from "react";
import { View } from "react-native";
import {
  QUERY_BOOK_BY_BOOKNAME_ISBN,
  QUERY_BOOK_BY_PUBLISH_AUTHOR,
} from "../../gql/gql";
import Books from "./Books";
// import Search from "./Search";
import Search from "../Common/Search";
import LottieView from "lottie-react-native";
import SearchButtonGroup from "./SearchButtonGroup";
import { Button } from "@rneui/base";
import ScanBook from "../Common/ScanBook";
import BookArea from "./BookArea";

const buttonGroupText = ["書籍名稱", "作者名稱", "出版社名稱", "ISBN"];

// 作者名稱和出版社名稱搜尋還沒完成
const SearchBook = () => {
  const [searchText, setSearchText] = useState("");

  // 0 = 書籍名稱, 1 = 作者名稱, 2 = 出版社名稱, 3 = ISBN
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchBook, { loading: bookLoading1, data: bookDataByNameAndISBN }] =
    useLazyQuery(QUERY_BOOK_BY_BOOKNAME_ISBN);
  const [
    searchBookByFilter,
    { loading: bookLoading2, data: bookDataByAuthorAndPublish },
  ] = useLazyQuery(QUERY_BOOK_BY_PUBLISH_AUTHOR);

  const changeSearchText = (text) => {
    setSearchText(text);
  };

  const searchBookByText = () => {
    if (searchText != "") {
      if (selectedIndex == 0) {
        searchBook({ variables: { name: searchText } });
      }

      if (selectedIndex == 1) {
        searchBookByFilter({ variables: { authorName: searchText } });
      }

      if (selectedIndex == 2) {
        searchBookByFilter({ variables: { publishName: searchText } });
      }

      if (selectedIndex == 3) {
        searchBook({ variables: { isbn: searchText } });
      }
    }
  };

  return (
    <View>
      <Search
        changeSearchText={changeSearchText}
        searchText={searchText}
        // searchBookByText={searchBookByText}
        selectedIndex={selectedIndex}
        buttonGroupText={buttonGroupText}
      />
      <SearchButtonGroup
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />

      <BookArea />

      <View style={{ padding: 10 }}>
        <Button buttonStyle={{ borderRadius: 5 }} onPress={searchBookByText}>
          搜尋
        </Button>
      </View>

      {selectedIndex == 3 ? <ScanBook setSearchText={setSearchText} /> : null}

      {bookLoading1 || bookLoading2 ? (
        <LottieView
          style={{
            height: 300,
            alignSelf: "center",
          }}
          source={require("../../assets/animations/loading.json")}
          autoPlay
          speed={0.5}
          loop={true}
        />
      ) : (
        <Books
          bookDataByNameAndISBN={bookDataByNameAndISBN}
          bookDataByAuthorAndPublish={bookDataByAuthorAndPublish}
          selectedIndex={selectedIndex}
        />
      )}
    </View>
  );
};

export default SearchBook;
