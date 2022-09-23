import { SearchBar, Button } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import axios from "axios";

const Search = ({
  searchISBN,
  searchLoading,
  setSearchISBN,
  setSeacrhLoading,
  setStartSearching,
  setErrorMessage,
  setBookData,
  checkBookExists,
}) => {
  const send = async () => {
    try {
      if (searchISBN.length == 13) {
        setSeacrhLoading(true);
        let response = await axios.post(
          "https://online-library-puppeteer.herokuapp.com/getBooks",
          {
            ISBN: searchISBN,
          }
        );
        checkBookExists({ variables: { isbn: searchISBN } });
        setSeacrhLoading(false);
        setStartSearching(true);
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

  const changeSearchISBN = (ISBN) => {
    setSearchISBN(ISBN);
  };

  return (
    <>
      <View>
        <SearchBar
          placeholder="輸入國際標準書號共 13 位數字 ..."
          platform="android"
          onChangeText={changeSearchISBN}
        />
      </View>
      <View style={{ padding: 10 }}>
        <Button
          buttonStyle={{ borderRadius: 5 }}
          onPress={send}
          loading={searchLoading}
        >
          搜尋
        </Button>
      </View>
    </>
  );
};

export default Search;
