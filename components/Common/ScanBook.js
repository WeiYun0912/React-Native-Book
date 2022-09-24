import { Button, Dialog } from "@rneui/base";
import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Text from "../../helper/NotosFont";

const ScanBook = ({ setSearchText }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const [visible, setVisible] = useState(false);

  const toggleDialog = () => {
    setScanned(false);
    setVisible(!visible);
  };

  const asyForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");
    })();
  };

  useEffect(() => {
    asyForCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setVisible(!visible);
    setSearchText(data);
    console.log("Type:" + type + "\nData:" + data);
  };

  //Check permissions
  if (hasPermission === null) {
    return (
      <View>
        <Text>請求相機權限</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View>
        <Text>請求相機權限</Text>
        <Button onPress={() => asyForCameraPermission()}>請求權限</Button>
      </View>
    );
  }

  return (
    <View>
      <View style={{ padding: 10 }}>
        <Button
          buttonStyle={{ borderRadius: 5, backgroundColor: "#C72B62" }}
          onPress={toggleDialog}
        >
          掃描書籍 ISBN
        </Button>
      </View>
      <View>
        <Dialog
          isVisible={visible}
          onBackdropPress={toggleDialog}
          overlayStyle={{ backgroundColor: "#fff" }}
        >
          <Dialog.Title title="掃描書籍背後的條碼" />
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 400 }}
          />
        </Dialog>
      </View>
    </View>
  );
};

export default ScanBook;
