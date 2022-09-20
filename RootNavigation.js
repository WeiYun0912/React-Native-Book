import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import Home from "./screens/Home";
import Books from "./screens/Books";

const BottomTab = createBottomTabNavigator();

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // link,
  uri: "https://mombook.herokuapp.com/graphql",
  // uri: "http://10.0.2.2:4000/graphql",
});

export default function RootNavigation() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <BottomTab.Navigator initialRouteName="Home">
          <BottomTab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "首頁",
              tabBarActiveTintColor: "#e5634d",
              tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: "bold",
              },

              tabBarIcon: ({ color }) => (
                <FontAwesomeIcons color={color} name="home" size={30} />
              ),
              headerShown: false,
            }}
          />

          <BottomTab.Screen
            name="Books"
            component={Books}
            options={{
              title: "所有書籍",
              tabBarLabel: "所有書籍",
              // tabBarBadge: 5,
              tabBarActiveTintColor: "#e5634d",
              tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: "bold",
              },
              tabBarIcon: ({ color }) => (
                <FontAwesomeIcons color={color} name="book" size={30} />
              ),
            }}
          />

          <BottomTab.Screen
            name="SearchBook"
            component={Home}
            options={{
              title: "搜尋書籍",
              tabBarLabel: "搜尋書籍",
              // tabBarBadge: 5,
              tabBarActiveTintColor: "#e5634d",
              tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: "bold",
              },
              tabBarIcon: ({ color }) => (
                <FontAwesomeIcons color={color} name="search" size={30} />
              ),
            }}
          />
          {/* <BottomTab.Screen
            name="MovieDetail"
            component={Home}
            options={{
              tabBarStyle: {
                display: "none",
              },
              tabBarItemStyle: {
                display: "none",
              },
              headerShown: false,
            }}
          />
          <BottomTab.Screen
            name="CastDetail"
            component={CastDetail}
            options={{
              tabBarStyle: {
                display: "none",
              },
              tabBarItemStyle: {
                display: "none",
              },
              headerShown: false,
            }}
          /> */}
        </BottomTab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
