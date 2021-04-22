import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Styles from "../assets/css/Styles";

function Cart({ navigation }) {
  return (
    <View style={[Styles.container, styles.container]}>
      <Text>Tanuj</Text>
      <Button
        title="Confirm order"
        onPress={() => navigation.navigate("Confirmed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  }
})

export default Cart;
