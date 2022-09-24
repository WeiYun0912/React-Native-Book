import { Dialog, Image } from "@rneui/base";
import React from "react";

import { ActivityIndicator, View } from "react-native";

const BookAreaDialog = ({ visibleArea, toggleVisibleArea, area }) => {
  let imageSource = "";
  let imageText = "A區";
  if (area == "A") {
    imageSource = require("../../assets/areaA.png");
    imageText = "A區";
  }

  if (area == "B") {
    imageSource = require("../../assets/areaA.png");
    imageText = "B區";
  }
  if (area == "C") {
    imageSource = require("../../assets/areaA.png");
    imageText = "C區";
  }

  return (
    <Dialog
      isVisible={visibleArea}
      onBackdropPress={toggleVisibleArea}
      overlayStyle={{ backgroundColor: "#fff" }}
    >
      <Dialog.Title title={`${imageText} 書籍位置圖`} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={imageSource}
          style={{
            width: 250,
            height: 350,
            resizeMode: "contain",
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
    </Dialog>
  );
};

export default BookAreaDialog;
