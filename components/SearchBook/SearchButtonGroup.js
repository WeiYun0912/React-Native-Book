import React from "react";
import { ButtonGroup } from "@rneui/base";
const SearchButtonGroup = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <ButtonGroup
      buttons={["書籍名稱", "作者名稱", "出版社名稱", "ISBN"]}
      selectedIndex={selectedIndex}
      onPress={(value) => setSelectedIndex(value)}
      containerStyle={{ marginBottom: 20 }}
    />
  );
};

export default SearchButtonGroup;
