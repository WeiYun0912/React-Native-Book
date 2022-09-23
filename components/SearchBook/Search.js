import { SearchBar } from "@rneui/base";
import React from "react";

const Search = ({
  changeSearchText,
  // searchBookByText,
  searchText,
  selectedIndex,
  buttonGroupText,
}) => {
  return (
    <SearchBar
      placeholder={`輸入 ${buttonGroupText[selectedIndex]}...`}
      platform="android"
      onChangeText={changeSearchText}
      value={searchText}
      // onCancel={searchBookByText}
    />
  );
};

export default Search;
