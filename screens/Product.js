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
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

function Product({ navigation }) {
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
          <Text style={Styles.heading}>Gold Premium</Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
          }}
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={require("../assets/img/products/goldPremium.png")}
            style={styles.productImage}
          />
          <Text style={Styles.subHeading}>Rs. 30/Pack</Text>
          <Text style={[Styles.subTitle, styles.inStock]}>In Stock</Text>
          <AppButton title="Buy Now" style={styles.buyButton} />
          <AppButton title="Add To Cart" style={styles.cartButton} />
          <Text style={[Styles.subHeading, styles.subHeading]}>
            Nutritional Facts
          </Text>
          <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
            <Rows data={data.tableData} textStyle={styles.tableText} />
          </Table>
        </ScrollView>
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
  addButton: {
    backgroundColor: "#FFC93C",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 7,
    width: 100,
  },
  inStock: {
    color: "#49B723",
  },
  productImage: {
    marginTop: 40,
    alignSelf: "center",
  },
  buyButton: {
    marginVertical: 10,
    backgroundColor: "#FFC93C",
  },
  cartButton: {
    marginVertical: 10,
    backgroundColor: "#F49640",
  },
  subHeading: {
    marginTop: 15,
    marginBottom: 10,
  },
  tableText: {
    padding: 10,
    fontSize: 17,
    fontFamily: "manropeRegular",
  },
});

export default Product;
