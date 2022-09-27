import React from "react";
import { View } from "react-native";
import Text from "../../../helper/NotosFont";

import BookIsExists from "./BookIsExists";
import BookNotExists from "./BookNotExists";

const CheckBookExists = ({
  bookExists,
  startSearching,
  setStartSearching,
  bookData,
  loading,
}) => {
  //要按下搜尋後，才能跳出按鈕選項，不然畫面一進來就會詢問使用者是否要新增書籍。

  // if (bookExists?.searchBook == undefined) {
  //   return null;
  // }

  if (loading) {
    return (
      <Text style={{ textAlign: "center", fontSize: 24, color: "#ff0000" }}>
        檢查書籍狀態中... 請稍等
      </Text>
    );
  }

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
