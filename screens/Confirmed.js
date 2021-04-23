import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Styles from "../assets/css/Styles";
import AppButton from "../components/AppButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function Confirmed({ navigation }) {
  const [data, setData] = useState({
    tableData: [
      ["Energy", "87 Kcal"],
      ["Total Fat", "6 g"],
      ["Saturated Fat", "3.6 g"],
      ["Cholesterol", "16 mg"],
      ["Total Carbohydrate", "5 g"],
      ["Protein", "3.2 g"],
      ["Calcium", "150 mg"],
      ["Added Sugar ", "0 g"],
      ["Trans Fat", "0 g"],
      ["Fat", "6% Minimum"],
      ["SNF", "9% Minimum"],
    ],
  });

  return (
    <View style={Styles.container}>
      <View style={styles.container}>
        <Image source={require("../assets/img/design/confirmed.png")} />
        <Text style={[Styles.heading, styles.heading]}>Order Confirmed!</Text>
        <Text style={Styles.text}>Thank you for ordering from Gaurik</Text>
      </View>
      <Image
        style={styles.imageTop}
        source={require("../assets/img/design/allTop.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    paddingHorizontal: 20,
    zIndex: 2,
    marginBottom: 100,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imageTop: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
  heading: {
    marginVertical: 10,
    color: "#1E5D8A",
  },
});

export default Confirmed;
