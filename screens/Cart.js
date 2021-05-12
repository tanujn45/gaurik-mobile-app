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
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./../redux/actions/cart";

function Cart({ navigation }) {
  const { items } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  function totalAmount() {
    let totalAmount = 0;
    for (let i = 0; i < items.length; i++) {
      totalAmount += items[i].product.price * items[i].quantity;
    }
    return totalAmount;
  }
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
          {items && items.map((item) => (
            <View style={Styles.card} key={item.product.key}>
              <View style={styles.productCard}>
                <Image
                  source={require("../assets/img/products/goldPremium.png")}
                  style={styles.productImage}
                />
                <View>
                  <Text style={Styles.subHeading}>{item.product.title}</Text>
                  <Text style={Styles.subTitle}>Rs {item.product.price} x {item.quantity}</Text>
                </View>
              </View>
              <TouchableOpacity
                underlayColor="#DDDDDD"
                onPress={() => {
                  for (let i = 0; i < items.length; i++) {
                    if (items[i].product.key === item.product.key) {
                      items.splice(i, 1)
                      dispatch(addItem([...items]));
                    }
                  }
                }}
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
          ))}


          {/* <View style={Styles.card}>
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
          </View> */}

          <Text style={[Styles.subHeading, styles.subHeading]}>Price Details ({items.length} Items)</Text>
          <View style={Styles.hr} />
          <View style={styles.priceText}>
            <Text style={Styles.text}>Total MRP</Text>
            <Text style={Styles.text}>Rs {totalAmount()}</Text>
          </View>
          <View style={styles.priceText}>
            <Text style={Styles.text}>Convenience Fee</Text>
            <Text style={Styles.text}>Rs {totalAmount() * 0.15}</Text>
          </View>
          <View style={Styles.hr} />
          <View style={styles.priceText}>
            <Text style={Styles.text}>Total Amount</Text>
            <Text style={Styles.text}>Rs {Math.trunc(totalAmount() * 1.15)}</Text>
          </View>
          <AppButton title="Place Order" style={styles.buyButton} onPress={() => navigation.navigate('Confirmed')} />
        </ScrollView>
      </View>
      <Image
        style={styles.imageTop}
        source={require("../assets/img/design/allTop.png")}
      />
    </View >
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
