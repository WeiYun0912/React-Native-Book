import React, { useRef, useState } from "react";
import { FAB, Icon } from "@rneui/themed";
import { ScrollView, View, RefreshControl } from "react-native";
import Books from "../components/Books/Books";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const BooksView = () => {
  const ref = useRef();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  console.log(refreshing);

  const goTop = () => {
    ref.current.scrollTo({ x: 0, y: 0 });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        ref={ref}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Books refreshing={refreshing} />
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
