import React from "react";
import { View } from "react-native";

import BookIsExists from "./CheckExists/BookIsExists";
import BookNotExists from "./CheckExists/BookNotExists";

const CheckBookExists = ({
  bookExists,
  startSearching,
  setStartSearching,
  bookData,
}) => {
  //要按下搜尋後，才能跳出按鈕選項，不然畫面一進來就會詢問使用者是否要新增書籍。
  if (!startSearching) {
    return null;
  }

  // true = 已經有這本書了 詢問使用者要不要新增書籍資料
  console.log(bookExists?.searchBook);
  return (
    <View>
      {bookExists?.searchBook ? (
        <BookIsExists />
      ) : (
        <BookNotExists
          setStartSearching={setStartSearching}
          bookData={bookData}
        />
      )}
    </View>
  );
};

export default CheckBookExists;
