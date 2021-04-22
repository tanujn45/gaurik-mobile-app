import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../screens/Cart";
import Confirmed from "../screens/Confirmed";

const Stack = createStackNavigator();

function CartNavigaiton() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Confirmed" component={Confirmed} />
    </Stack.Navigator>
  );
}

export default CartNavigaiton;
