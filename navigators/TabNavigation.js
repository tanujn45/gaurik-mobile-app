import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "../screens/Categories";
import Products from "../screens/Products";
import CartNavigation from "../navigators/CartNavigaiton";
import { StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  const size = 30;
  const color = "#1E5D8A";
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#FFC93C",
        inactiveTintColor: "#FFF",
        showLabel: false,
        style: {
          position: "absolute",
          height: 90,
          paddingTop: 10,
          backgroundColor: "#1E5D8A",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo color={color} size={30} name="home" />
          ),
        }}
        name="Categories"
        component={Categories}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo color={color} size={30} name="shopping-cart" />
          ),
        }}
        name="Products"
        component={Products}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              color={color}
              alIcons
              size={30}
              name="account-circle"
            />
          ),
        }}
        name="Cart"
        component={CartNavigation}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    backgroundColor: "red",
  },
});

export default TabNavigation;
