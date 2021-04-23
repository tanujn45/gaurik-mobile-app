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

function Products({ navigation }) {
  return (
    <View style={Styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            underlayColor="#DDDDDD"
            onPress={() => navigation.pop()}
          >
            <Image
              source={require("../assets/img/design/arrow.png")}
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <Text style={Styles.heading}>Gaurik Milk</Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
          }}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate("Product")}
          >
            <View style={Styles.card}>
              <View style={styles.productCard}>
                <Image
                  source={require("../assets/img/products/goldPremium.png")}
                  style={styles.productImage}
                />
                <View>
                  <Text style={Styles.subTitle}>Rs 30 per Pack</Text>
                  <Text style={Styles.subHeading}>Gold Premium</Text>
                  <AppButton title="add +" style={styles.addButton} />
                </View>
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
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  backArrow: {
    transform: [{ rotate: "180deg" }],
    marginRight: 25,
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
  productCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#FFC93C",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 7,
    width: 100,
    marginTop: 10,
  },
  // productImage: {
  //   marginTop: 10,
  //   alignSelf: "center",
  // },
  arrow: {
    alignSelf: "flex-end",
    marginBottom: 10,
    marginHorizontal: 10,
  },
});

export default Products;
