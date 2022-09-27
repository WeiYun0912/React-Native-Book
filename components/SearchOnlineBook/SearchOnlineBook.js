import React, { useState } from "react";
import { View } from "react-native";

import Text from "../../helper/NotosFont";
import Search from "../Common/Search";
import Book from "./Book";
import { useLazyQuery } from "@apollo/client";
import { QUERY_BOOK_EXISTS } from "../../gql/gql";
import CheckBookExists from "./CheckBookExists/CheckBookExists";
import ScanBook from "../Common/ScanBook";
import { Button } from "@rneui/base";
import axios from "axios";

//輸入ISBN進行線上查詢 查詢依據為國家圖書館
const SearchOnlineBook = () => {
  // 設定ISBN文字
  const [searchText, setSearchText] = useState("");

  //當搜尋時將searchLoading設為true
  const [searchLoading, setSeacrhLoading] = useState(false);

  //判斷是否開始搜尋 用意為 搜尋到的書籍會與資料庫的書籍做匹配 要是已經存在的話就會顯示已經有這本書
  //但是沒有這本書的話 會跳出詢問畫面 詢問是否要幫助使用者將該本書的資料新增到資料庫
  //按下需要或不需要時都會將startSearcing重新設置為false 防止詢問畫面出現
  const [startSearching, setStartSearching] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [checkBookExists, { data: bookExists, loading }] =
    useLazyQuery(QUERY_BOOK_EXISTS);
  const [bookData, setBookData] = useState({});

  const getBooksFromOnlineLibrary = async () => {
    try {
      if (searchText.length == 13) {
        setSeacrhLoading(true);
        let response = await axios.post(
          "https://mombook-cheerio-server.onrender.com/getBooks",
          {
            ISBN: searchText,
          }
        );

        //確認使用者是否已經擁有這本書即
        checkBookExists({ variables: { isbn: searchText } });
        setSeacrhLoading(false);
        //將startSearching更改為true 讓詢問畫面出現
        setStartSearching(true);
        //清空錯誤訊息
        setErrorMessage("");
        setBookData(response.data);
      }
    } catch (error) {
      console.log(error.message);
      setSeacrhLoading(false);
      setErrorMessage(
        `搜尋失敗，請確認ISBN號碼是否輸入正確！ ${error.message}`
      );
    }
  };

  const changeSearchText = (ISBN) => {
    setSearchText(ISBN);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Search searchText={searchText} changeSearchText={changeSearchText} />
      <View style={{ padding: 10 }}>
        <Button
          buttonStyle={{ borderRadius: 5 }}
          onPress={getBooksFromOnlineLibrary}
          loading={searchLoading}
        >
          搜尋
        </Button>
      </View>

      <ScanBook setSearchText={setSearchText} />
      <View style={{ flex: 3 }}>
        <Book bookData={bookData} errorMessage={errorMessage} />
      </View>
      <View style={{ flex: 2 }}>
        <CheckBookExists
          bookExists={bookExists}
          bookData={bookData}
          setStartSearching={setStartSearching}
          startSearching={startSearching}
          loading={loading}
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
