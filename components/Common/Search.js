import { SearchBar } from "@rneui/base";
import React from "react";

const Search = ({
  changeSearchText,
  searchText,
  selectedIndex = "",
  buttonGroupText = "",
}) => {
  let placeHolder = "輸入 書籍ISBN...";

  if (selectedIndex != "" && buttonGroupText != "") {
    placeHolder = `輸入 ${buttonGroupText[selectedIndex]}...`;
  }

  return (
    <SearchBar
      placeholder={placeHolder}
      platform="android"
      onChangeText={changeSearchText}
      value={searchText}
      // onCancel={searchBookByText}
    />
  );
};

export default Search;
