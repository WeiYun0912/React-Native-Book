import { useMutation } from "@apollo/client";
import { Button } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import {
  MUTATION_CREATE_AUTHOR,
  MUTATION_CREATE_PUBLISH,
  MUTATION_CREATE_BOOK,
} from "../../../gql/gql";
import Text from "../../../helper/NotosFont";

const BookNotExists = ({ setStartSearching, bookData }) => {
  const [createAuthor] = useMutation(MUTATION_CREATE_AUTHOR);

  const [createPublish] = useMutation(MUTATION_CREATE_PUBLISH);

  const [createBook] = useMutation(MUTATION_CREATE_BOOK);

  //在新增的時候 要確認有沒有作者和出版社的資料 才能新增
  const InsertBook = async () => {
    let author = await createAuthor({
      variables: {
        input: {
          name: bookData.author,
        },
      },
    });

    let publish = await createPublish({
      variables: {
        input: bookData.publish,
      },
    });

    let book = await createBook({
      variables: {
        input: {
          name: bookData.bookName,
          publishId: publish.data.createPublish.id,
          authorId: author.data.createAuthor.id,
          ISBN: bookData.ISBN,
        },
      },
    });
    console.log(book);
    setStartSearching(false);
  };
  return (
    <View>
      <Text style={{ fontSize: 18, color: "#2100fa", textAlign: "center" }}>
        妳還沒有這本書，是否需要幫妳新增這筆書籍的資料？
      </Text>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
        }}
      >
        <Button
          color="error"
          size="lg"
          buttonStyle={{ width: 150, borderRadius: 5 }}
          onPress={() => setStartSearching(false)}
        >
          不需要
        </Button>

        <Button
          color="success"
          size="lg"
          buttonStyle={{ width: 150, borderRadius: 5 }}
          onPress={InsertBook}
        >
          需要
        </Button>
      </View>
    </View>
  );
};

export default BookNotExists;
