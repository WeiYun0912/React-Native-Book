import { SearchBar } from "@rneui/base";
import React from "react";

const Search = ({ changeSearchText, searchText }) => {
  return (
    <SearchBar
      placeholder={`輸入 書籍ISBN...`}
      platform="android"
      onChangeText={changeSearchText}
      value={searchText}
      // onCancel={searchBookByText}
    />
  );
};

export default Search;
