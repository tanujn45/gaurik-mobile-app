import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Image, Alert } from "react-native";

import Styles from "../assets/css/Styles";
import AppButton from "../components/AppButton";
import { signInFunc } from "../api/firebaseMethods";
import AuthContext from "../auth/context";

function SignIn({ navigation }) {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function checkSignIn() {
    if (!email || !password) {
      Alert.alert("Wrong credentials!");
      setMessage("Wrong Credentials!");
    } else {
      authContext.setuser(signInFunc(email, password));
      navigation.navigate("TabNavigation");
    }
  }
  return (
    <View style={Styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={Styles.heading}>Welcome Back!</Text>
      </View>
      <View style={styles.signInContainer}>
        <Text style={[Styles.heading, styles.heading]}>Log In</Text>
        <Text style={{ marginBottom: 20, fontSize: 18, color: "red" }}>
          {message}
        </Text>
        <Text style={Styles.inputTitle}>Email</Text>
        <TextInput
          style={[Styles.input, styles.input]}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
        />
        <Text style={Styles.inputTitle}>Password</Text>
        <TextInput
          style={[Styles.input, styles.input]}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <AppButton
          title="Log In"
          style={styles.button}
          onPress={() => checkSignIn()}
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
