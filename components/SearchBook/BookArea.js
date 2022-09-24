import { Button } from "@rneui/base";
import React from "react";
import { useState } from "react";
import { View } from "react-native";
import BookAreaDialog from "./BookAreaDialog";

const BookArea = () => {
  const [visibleArea, setVisibleArea] = useState(false);
  const [area, setArea] = useState("A");
  const toggleVisibleArea = (pressArea) => {
    if (pressArea == "A") {
      setArea("A");
    }

    if (pressArea == "B") {
      setArea("B");
    }

    if (pressArea == "C") {
      setArea("C");
    }
    setVisibleArea(!visibleArea);
  };

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <Button
        buttonStyle={{
          width: 100,
          borderRadius: 5,
          backgroundColor: "#5A9AE6",
        }}
        onPress={() => toggleVisibleArea("A")}
      >
        a區
      </Button>
      <Button
        buttonStyle={{
          width: 100,
          borderRadius: 5,
          backgroundColor: "#5A9AE6",
        }}
        onPress={() => toggleVisibleArea("B")}
      >
        b區
      </Button>
      <Button
        buttonStyle={{
          width: 100,
          borderRadius: 5,
          backgroundColor: "#5A9AE6",
        }}
        onPress={() => toggleVisibleArea("C")}
      >
        c區
      </Button>
      <BookAreaDialog
        visibleArea={visibleArea}
        toggleVisibleArea={toggleVisibleArea}
        area={area}
      />
    </View>
  );
};

export default BookArea;
