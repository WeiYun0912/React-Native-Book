import React, { useState } from "react";
import { View } from "react-native";

import Text from "../../helper/NotosFont";
import Search from "./Search";
import Book from "./Book";
import { useLazyQuery } from "@apollo/client";
import { QUERY_BOOK_EXISTS } from "../../gql/gql";
import CheckBookExists from "./CheckBookExists";
import ScanBook from "../Common/ScanBook";

//輸入ISBN進行線上查詢 查詢依據為國家圖書館
const SearchOnlineBook = () => {
  // 設定ISBN文字
  const [searchISBN, setSearchISBN] = useState("");

  //當搜尋時將searchLoading設為true
  const [searchLoading, setSeacrhLoading] = useState(false);

  //判斷是否開始搜尋 用意為 搜尋到的書籍會與資料庫的書籍做匹配 要是已經存在的話就會顯示已經有這本書
  //但是沒有這本書的話 會跳出詢問畫面 詢問是否要幫助使用者將該本書的資料新增到資料庫
  //按下需要或不需要時都會將startSearcing重新設置為false 防止詢問畫面出現
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
      <ScanBook setSearchText={setSearchISBN} />
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
