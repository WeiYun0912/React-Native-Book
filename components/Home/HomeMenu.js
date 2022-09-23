import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "../../helper/NotosFont";
import { SearchBar, Icon } from "@rneui/themed";
import MenuIconsData from "../../helper/MenuIcon.json";

//首頁的搜尋欄
const HomeMenu = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  const updateSearch = (search) => {
    console.log(search);
    setSearchText(search);
  };

  return (
    <View
      style={{
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#fff",
        borderWidth: 1.2,
        borderColor: "#e9e9e9",
        borderRadius: 10,
        // height: 250,
        // marginTop: 0,
        padding: 10,
        marginTop: -40,
      }}
    >
      <View>
        <SearchBar
          platform="android"
          placeholder="輸入要查詢的書籍名稱 ...."
          onChangeText={updateSearch}
          containerStyle={{ backgroundColor: "transparent" }}
          inputContainerStyle={{
            backgroundColor: "#f5f5f5",
            borderRadius: 10,
          }}
          leftIconContainerStyle={{ display: "none" }}
        />
      </View>
      <MenuIcons navigation={navigation} />
    </View>
  );
};

const MenuIcons = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",

        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {MenuIconsData.map((icon) => (
        <TouchableOpacity
          key={icon.name}
          activeOpacity={0.9}
          onPress={() => navigation.navigate(icon.screen)}
        >
          <View style={{ alignItems: "center", padding: 5 }}>
            <Icon
              name={icon.name}
              type={icon.type}
              color={icon.color}
              raised
              size={30}
              reverse
              reverseColor="#e15c4c"
            />
            <Text style={{ fontSize: 18 }}>{icon.text}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HomeMenu;
