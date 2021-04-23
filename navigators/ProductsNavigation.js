import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "../screens/Categories";
import Products from "../screens/Products";
import Product from "../screens/Product";

const Stack = createStackNavigator();

function ProductsNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}

export default ProductsNavigation;
