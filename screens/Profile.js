import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import Styles from "../assets/css/Styles";
import AuthContext from "../auth/context";
import { logOutFunc } from "../api/firebaseMethods";

function Profile() {
  const { user, setuser } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOutFunc();
    setuser(null);
  };

  return (
    <View style={Styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={Styles.heading}>Your Profile</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <AppButton
            title="Logout"
            style={styles.buyButton}
            onPress={handleLogOut}
          />
        </View>

        <View style={Styles.card}>
          <View style={styles.productCard}>
            <Image
              source={require("../assets/img/products/goldPremium.png")}
              style={styles.productImage}
            />
            <View>
              <Text style={styles.subHeading}>Gold Premium</Text>
              <Text style={styles.subTitle}>Qty - 20</Text>
              <Text style={styles.delivery}>Delivered on 10 Apr 2021</Text>
            </View>
          </View>
        </View>
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
  name: {
    marginTop: 15,
    marginBottom: 0,
    fontSize: 24,
    fontFamily: "manropeBold",
    color: "#1E5D8A",
  },
  nameid: {
    fontSize: 17,
    fontFamily: "manropeBold",
    color: "#B9B9B9",
  },
  delivery: {
    fontSize: 12,
    fontFamily: "manropeBold",
    color: "#B9B9B9",
  },
  subTitle: {
    fontSize: 14,
    fontFamily: "manropeBold",
    color: "#000",
    textTransform: "uppercase",
    marginBottom: 5,
  },
  productCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  productImage: {
    height: 100,
    width: 100,
    resizeMode: "cover",
    marginRight: 20,
  },
  subHeading: {
    fontSize: 20,
    fontFamily: "manropeRegular",
    color: "#000",
    marginBottom: 5,
  },
  card: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 10,
    marginLeft: 20,
    padding: 10,
    height: 120,
    width: "90%",
  },
  imageTop: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
});

export default Profile;
