import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";

import Styles from "../assets/css/Styles";
import AppButton from "../components/AppButton";

function SignIn({ navigation }) {
  const [username, setUsername] = useState("");
  return (
    <View style={Styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={Styles.heading}>Welcome Back!</Text>
      </View>
      <View style={styles.signInContainer}>
        <Text style={[Styles.heading, styles.heading]}>Log In</Text>
        <Text style={Styles.inputTitle}>Username</Text>
        <TextInput
          style={[Styles.input, styles.input]}
          onChange={(text) => setUsername(text)}
          value={username}
        />
        <Text style={Styles.inputTitle}>Password</Text>
        <TextInput
          style={[Styles.input, styles.input]}
          secureTextEntry={true}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <AppButton
          title="Log In"
          style={styles.button}
          onPress={() => navigation.navigate("TabNavigation")}
        />
      </View>
      <Image
        style={styles.image}
        source={require("../assets/img/design/signIn.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    flexDirection: "column-reverse",
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  signInContainer: {
    flex: 3,
    backgroundColor: "#FFC93C",
    // borderTopColor: "#EA903E",
    // borderTopWidth: 10,
    borderTopLeftRadius: 50,
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  heading: {
    marginBottom: 30,
  },
  input: {
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#1E5D8A",
  },
  image: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});

export default SignIn;
