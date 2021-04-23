import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Products from "../screens/Products";
import CartNavigation from "../navigators/CartNavigaiton";
import { StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProductsNavigation from "./ProductsNavigation";
import Profile from "../screens/Profile";

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
        component={ProductsNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo color={color} size={30} name="shopping-cart" />
          ),
        }}
        name="Cart"
        component={CartNavigation}
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
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
