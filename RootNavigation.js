import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import FontAwesomeIcons5 from "react-native-vector-icons/FontAwesome5";
import HomeView from "./screens/HomeView";
import BooksView from "./screens/BooksView";
import SearchBookView from "./screens/SearchBookView";
import SearchOnlineBookView from "./screens/SearchOnlineBookView";

const BottomTab = createBottomTabNavigator();

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // link,
  // uri: "https://mombook.herokuapp.com/graphql",
  // uri: "http://10.0.2.2:4000/graphql",
  // uri: "https://mombook-graphql-server.onrender.com/graphql",
  uri: "https://sleepy-coral.cyclic.app/graphql",
});

export default function RootNavigation() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <BottomTab.Navigator initialRouteName="HomeView">
          <BottomTab.Screen
            name="HomeView"
            component={HomeView}
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
            name="BooksView"
            component={BooksView}
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
            name="SearchBookView"
            component={SearchBookView}
            options={{
              title: "查詢書籍",
              tabBarLabel: "查詢書籍",
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

          <BottomTab.Screen
            name="SearchOnlineBookView"
            component={SearchOnlineBookView}
            options={{
              title: "線上查詢",
              tabBarLabel: "線上查詢",
              // tabBarBadge: 5,
              tabBarActiveTintColor: "#e5634d",
              tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: "bold",
              },
              tabBarIcon: ({ color }) => (
                <FontAwesomeIcons5 color={color} name="atlas" size={30} />
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
