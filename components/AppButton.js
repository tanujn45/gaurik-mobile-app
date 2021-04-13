import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function AppButton({ onPress, title, style }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.appButtonContainer, style]}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "manropeBold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default AppButton;
