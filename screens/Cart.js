import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Styles from "../assets/css/Styles";
import AppButton from "../components/AppButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


function Cart({ navigation }) {
  return (
    <View style={Styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={Styles.heading}>Your Cart</Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "flex-start",
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={Styles.card}>
            <View style={styles.productCard}>
              <Image
                source={require("../assets/img/products/goldPremium.png")}
                style={styles.productImage}
              />
              <View>
                <Text style={Styles.subHeading}>Gold Premium</Text>
                <Text style={Styles.subTitle}>Rs 30 x 1000</Text>
              </View>
            </View>
            <TouchableOpacity
              underlayColor="#DDDDDD"
            >
              <MaterialIcons
                color="#000"
                alIcons
                size={30}
                style={styles.arrow}
                name="delete"
              />
            </TouchableOpacity>
          </View>

          <View style={Styles.card}>
            <View style={styles.productCard}>
              <Image
                source={require("../assets/img/products/goldPremium.png")}
                style={styles.productImage}
              />
              <View>
                <Text style={Styles.subHeading}>Gold Premium</Text>
                <Text style={Styles.subTitle}>Rs 30 x 100</Text>
              </View>
            </View>
            <TouchableOpacity
              underlayColor="#DDDDDD"
            >
              <MaterialIcons
                color="#000"
                alIcons
                size={30}
                style={styles.arrow}
                name="delete"
              />
            </TouchableOpacity>
          </View>

          <Text style={[Styles.subHeading, styles.subHeading]}>Price Details (2 Items)</Text>
          <View style={Styles.hr} />
          <View style={styles.priceText}>
            <Text style={Styles.text}>Total MRP</Text>
            <Text style={Styles.text}>Rs 1200</Text>
          </View>
          <View style={styles.priceText}>
            <Text style={Styles.text}>Convenience Fee</Text>
            <Text style={Styles.text}>Rs 99</Text>
          </View>
          <View style={Styles.hr} />
          <View style={styles.priceText}>
            <Text style={Styles.text}>Total Amount</Text>
            <Text style={Styles.text}>Rs 1299</Text>
          </View>
          <AppButton title="Place Order" style={styles.buyButton} onPress={() => navigation.navigate('Confirmed')} />
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
  imageTop: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
  productCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    alignSelf: "flex-end",
    marginTop: -20,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  buyButton: {
    marginVertical: 10,
    marginTop: 20,
    backgroundColor: "#FFC93C",
  },
  subHeading: {
    marginTop: 15,
    marginBottom: 0,
  },
  priceText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  }
});

export default Cart;
