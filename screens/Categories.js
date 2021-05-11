import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Styles from "../assets/css/Styles";

function Categories({ navigation }) {
  const [username, setUsername] = useState("");
  return (
    <View style={Styles.container}>
      <View style={styles.container}>
        <Text style={Styles.heading}>Categories</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            activeOpacity={0.8}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate("Products")}
          >
            <View style={Styles.card}>
              <View>
                <Text style={Styles.subTitle}>Swad Malwa ka</Text>
                <Text style={Styles.subHeading}>Gaurik Milk</Text>
                <Image
                  source={require("../assets/img/products/goldPremium.png")}
                  style={styles.productImage}
                />
              </View>
              <Image
                style={styles.arrow}
                source={require("../assets/img/design/arrow.png")}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Image
        style={styles.imageTop}
        source={require("../assets/img/design/categoriesTop.png")}
      />
      <Image
        style={styles.imageBottom}
        source={require("../assets/img/design/categoriesBottom.png")}
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
  },
  imageTop: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
  imageBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  productImage: {
    marginTop: 10,
    alignSelf: "center",
  },
  arrow: {
    marginTop: -18,
    alignSelf: "flex-end",
    margin: 10,
  },
});

export default Categories;
