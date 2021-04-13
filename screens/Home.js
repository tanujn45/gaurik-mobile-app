import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Styles from "../assets/css/Styles";

function Home() {
  const [username, setUsername] = useState("");
  return (
    <View style={Styles.container}>
      <View style={styles.container}>
        <Text style={Styles.heading}>Categories</Text>
        <ScrollView>
          <View style={Styles.card}>
            <View>
              <Text style={Styles.subTitle}>Swad Malwa ka</Text>
              <Text style={Styles.heading}>Gaurik Milk</Text>
              <Image
                source={require("../assets/img/products/goldPremium.png")}
                style={styles.productImage}
              />
            </View>
          </View>
          <View style={Styles.card}>
            <View>
              <Text style={Styles.subTitle}>Swad Malwa ka</Text>
              <Text style={Styles.heading}>Gaurik Milk</Text>
              <Image
                source={require("../assets/img/products/goldPremium.png")}
                style={styles.productImage}
              />
            </View>
          </View>
          <View style={Styles.card}>
            <View>
              <Text style={Styles.subTitle}>Swad Malwa ka</Text>
              <Text style={Styles.heading}>Gaurik Milk</Text>
              <Image
                source={require("../assets/img/products/goldPremium.png")}
                style={styles.productImage}
              />
            </View>
          </View>
          <View style={Styles.card}>
            <View>
              <Text style={Styles.subTitle}>Swad Malwa ka</Text>
              <Text style={Styles.heading}>Gaurik Milk</Text>
              <Image
                source={require("../assets/img/products/goldPremium.png")}
                style={styles.productImage}
              />
            </View>
          </View>
          <View style={Styles.card}>
            <View>
              <Text style={Styles.subTitle}>Swad Malwa ka</Text>
              <Text style={Styles.heading}>Gaurik Milk</Text>
              <Image
                source={require("../assets/img/products/goldPremium.png")}
                style={styles.productImage}
              />
            </View>
          </View>
          <View style={Styles.card}>
            <View>
              <Text style={Styles.subTitle}>Swad Malwa ka</Text>
              <Text style={Styles.heading}>Gaurik Milk</Text>
              <Image
                source={require("../assets/img/products/goldPremium.png")}
                style={styles.productImage}
              />
            </View>
          </View>
        </ScrollView>
        <View style={Styles.card}>
          <View>
            <Text style={Styles.subTitle}>Swad Malwa ka</Text>
            <Text style={Styles.heading}>Gaurik Milk</Text>
            <Image
              source={require("../assets/img/products/goldPremium.png")}
              style={styles.productImage}
            />
          </View>
        </View>
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
    marginTop: 50,
    paddingHorizontal: 20,
    zIndex: 2,
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
});

export default Home;
