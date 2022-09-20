import { Text } from "react-native";
import { useFonts } from "expo-font";

export default (props) => {
  const [fontsLoaded] = useFonts({
    Noto: require("../assets/fonts/NotoSansTC-Medium.otf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Text
      {...props}
      style={[{ fontFamily: "Noto", fontWeight: "bold" }, props.style]}
    >
      {props.children}
    </Text>
  );
};
