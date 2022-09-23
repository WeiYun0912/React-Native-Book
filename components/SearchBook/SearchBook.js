import { useLazyQuery } from "@apollo/client";

import React, { useState } from "react";
import { View } from "react-native";
import { QUERY_BOOK } from "../../gql/gql";
import Text from "../../helper/NotosFont";
import Books from "./Books";
import Search from "./Search";
import LottieView from "lottie-react-native";
import SearchButtonGroup from "./SearchButtonGroup";
import ScanBook from "./ScanBook";
import { Button } from "@rneui/base";

const buttonGroupText = ["書籍名稱", "作者名稱", "出版社名稱", "ISBN"];

// 作者名稱和出版社名稱搜尋還沒完成
const SearchBook = () => {
  const [searchText, setSearchText] = useState("");
  const [startSearching, setStartSearching] = useState(false);

  // 0 = 書籍名稱, 1 = 作者名稱, 2 = 出版社名稱, 3 = ISBN
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchBook, { loading, error, data }] = useLazyQuery(QUERY_BOOK);

  if (error) {
    return <Text>Error</Text>;
  }

  const changeSearchText = (text) => {
    setSearchText(text);
  };

  const searchBookByText = () => {
    if (searchText != "") {
      setStartSearching(true);
      if (selectedIndex == 0) {
        searchBook({ variables: { name: searchText } });
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
        setStartSearching={setStartSearching}
      />
      <SearchButtonGroup
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />

      <View style={{ padding: 10 }}>
        <Button buttonStyle={{ borderRadius: 5 }} onPress={searchBookByText}>
          搜尋
        </Button>
      </View>

      {selectedIndex == 3 ? <ScanBook setSearchText={setSearchText} /> : null}

      {loading ? (
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
        <Books data={data} startSearching={startSearching} />
      )}
    </View>
  );
};

export default SearchBook;
