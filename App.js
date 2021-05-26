import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "./redux/store/index";
import { PersistGate } from "redux-persist/integration/react";
import * as firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./navigators/TabNavigation";
import apiKeys from "./config/keys";
import AuthContext from "./auth/context";
import AuthNavigation from "./navigators/AuthNavigation";

const Stack = createStackNavigator();

const getFonts = () =>
  Font.loadAsync({
    manropeRegular: require("./assets/fonts/Manrope-Medium.ttf"),
    manropeBold: require("./assets/fonts/Manrope-Bold.ttf"),
    manropeLight: require("./assets/fonts/Manrope-Light.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [user, setuser] = useState();

  if (!firebase.apps.length) {
    console.log("Connected with Firebase");
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

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
      <AuthContext.Provider value={{ user, setuser }}>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}
              >
                {user ? (
                  <Stack.Screen
                    name="TabNavigation"
                    component={TabNavigation}
                  />
                ) : (
                  <Stack.Screen
                    name="AuthNavigation"
                    component={AuthNavigation}
                  />
                )}
              </Stack.Navigator>
            </NavigationContainer>
          </PersistGate>
        </ReduxProvider>
      </AuthContext.Provider>
    );
  }
}
