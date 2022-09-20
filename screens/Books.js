import React, { useRef } from "react";
import { FAB, Icon } from "@rneui/themed";
import { ScrollView, View } from "react-native";
import ViewBooks from "../components/Books/ViewBooks";

const Books = () => {
  const ref = useRef();

  const goTop = () => {
    ref.current.scrollTo({ x: 0, y: 0 });
  };

  return (
    <View>
      <ScrollView style={{ backgroundColor: "#fff" }} ref={ref}>
        <ViewBooks />
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

export default Books;
