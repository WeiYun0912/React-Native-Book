import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import Text from "../../helper/NotosFont";
import Search from "./Search";
import Book from "./Book";
import { useLazyQuery } from "@apollo/client";
import { QUERY_BOOK_EXISTS } from "../../gql/gql";
import CheckBookExists from "./CheckBookExists";

//輸入ISBN進行線上查詢 查詢依據為國家圖書館
const SearchOnlineBook = () => {
  // 9789577627124
  const [searchISBN, setSearchISBN] = useState("");

  const [searchLoading, setSeacrhLoading] = useState(false);
  const [startSearching, setStartSearching] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [checkBookExists, { data: bookExists }] =
    useLazyQuery(QUERY_BOOK_EXISTS);
  const [bookData, setBookData] = useState({});

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Search
        searchISBN={searchISBN}
        searchLoading={searchLoading}
        setBookData={setBookData}
        setSeacrhLoading={setSeacrhLoading}
        setStartSearching={setStartSearching}
        setErrorMessage={setErrorMessage}
        setSearchISBN={setSearchISBN}
        checkBookExists={checkBookExists}
      />
      <View style={{ flex: 3 }}>
        <Book bookData={bookData} errorMessage={errorMessage} />
      </View>
      <View style={{ flex: 2 }}>
        <CheckBookExists
          bookExists={bookExists}
          bookData={bookData}
          setStartSearching={setStartSearching}
          startSearching={startSearching}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, textAlign: "justify" }}>
          線上搜尋是根據書籍的ISBN號碼進行搜尋，故在搜尋速度會較慢，搜尋之依據為國家圖書館。
        </Text>
      </View>
    </View>
  );
};

export default SearchOnlineBook;
