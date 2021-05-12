import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Styles from "../assets/css/Styles";
import AppButton from "../components/AppButton";
import Constants from "../constants/RequestURLs";
import axios from "axios";
import Modal from "react-native-modal";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./../redux/actions/cart";

function Products({ navigation, route }) {
  const [products, setproducts] = useState();
  const [quantity, setquantity] = useState("");
  const { title, slug } = route.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const { items } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  // console.log(items);
  // dispatch(addItem([]));

  const toggleModal = () => {
    setquantity("");
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    axios
      .get(`${Constants.baseURL}${Constants.productList}/${slug}`)
      .then((res) => {
        if (res.status === 200) {
          let prod = res.data;
          setproducts(prod);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <Text style={Styles.heading}>{title}</Text>
        </View>

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
          {products &&
            products.map((product) => (
              <TouchableOpacity
                key={product.key}
                activeOpacity={0.8}
                underlayColor="#DDDDDD"
                onPress={() => navigation.navigate("Product", product)}
              >
                <Modal isVisible={isModalVisible}>
                  <View style={styles.modalView}>
                    <Text style={Styles.heading}>Quantity</Text>
                    <TextInput
                      style={[Styles.input, styles.input]}
                      placeholder="Ex. 30"
                      textAlign="center"
                      fontSize="18"
                      onChangeText={(text) => setquantity(text)}
                      value={quantity}
                    />
                    <AppButton
                      title="Add +"
                      style={styles.modalButton}
                      onPress={() => {
                        console.log(product);
                        toggleModal();
                        let alreadyInCart = false;
                        for (let i = 0; i < items.length; i++) {
                          if (items[i].product.key === product.key) {
                            alreadyInCart = true;
                            items[i].quantity += parseInt(quantity);
                            dispatch(addItem([...items]));
                          }
                        }
                        if (!alreadyInCart) {
                          dispatch(
                            addItem([
                              ...items,
                              {
                                product: product,
                                quantity: parseInt(quantity),
                              },
                            ])
                          );
                        }
                      }}
                    />
                  </View>
                </Modal>
                <View style={Styles.card}>
                  <View style={styles.productCard}>
                    <Image
                      source={require("../assets/img/products/goldPremium.png")}
                      style={styles.productImage}
                    />
                    <View style={{ flexShrink: 1 }}>
                      <Text style={Styles.subTitle}>
                        Rs {product.price} per Pack
                      </Text>
                      <Text style={Styles.subHeading}>{product.title}</Text>
                      <AppButton
                        title="add +"
                        style={styles.addButton}
                        onPress={toggleModal}
                      />
                    </View>
                  </View>
                  <Image
                    style={styles.arrow}
                    source={require("../assets/img/design/arrow.png")}
                  />
                </View>
              </TouchableOpacity>
            ))}
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
  modalView: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingVertical: 25,
    paddingHorizontal: 10,
    alignItems: "center",
    shadowColor: "#000",
    width: "100%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    width: "80%",
    backgroundColor: "#FFC93C",
  },
  input: {
    marginTop: 15,
    width: "80%",
    marginBottom: 30,
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
  arrow: {
    alignSelf: "flex-end",
    marginBottom: 10,
    marginHorizontal: 10,
  },
});

export default Products;
