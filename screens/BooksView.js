import React, { useRef } from "react";
import { FAB, Icon } from "@rneui/themed";
import { ScrollView, View } from "react-native";
import Books from "../components/Books/Books";

const BooksView = () => {
  const ref = useRef();

  const goTop = () => {
    ref.current.scrollTo({ x: 0, y: 0 });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#fff" }} ref={ref}>
        <Books />
      </ScrollView>
      <FAB
        style={{
          zIndex: 9999,
          position: "absolute",
          right: 10,
          bottom: 30,
        }}
        color="#f5f5f5"
        size="large"
        overlayColor="#397af8"
        icon={<Icon name="arrow-up" type="font-awesome-5" color="#000" />}
        onPress={goTop}
      />
    </View>
  );
};

export default BooksView;
