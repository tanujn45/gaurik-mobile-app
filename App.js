import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/index";
import { PersistGate } from "redux-persist/integration/react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./screens/SignIn";
import TabNavigation from "./navigators/TabNavigation";

const Stack = createStackNavigator();

const getFonts = () =>
  Font.loadAsync({
    manropeRegular: require("./assets/fonts/Manrope-Medium.ttf"),
    manropeBold: require("./assets/fonts/Manrope-Bold.ttf"),
    manropeLight: require("./assets/fonts/Manrope-Light.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded)
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log("error")}
      />
    );
  else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="TabNavigation" component={TabNavigation} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
