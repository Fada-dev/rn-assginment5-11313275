import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { ThemeContext } from "./ThemeContext"; 

const HomeScreen = () => {
  const { darkMode } = useContext(ThemeContext); // Use the ThemeContext

  const transactions = [
    { id: 1, title: "Apple Store", category: "Entertainment", price: -5.99 },
    { id: 2, title: "Spotify", category: "Music", price: -12.99 },
    { id: 3, title: "Money Transfer", category: "Transaction", price: 300 },
    { id: 4, title: "Grocery", category: "Shopping", price: -88 },
  ];

  const getIconForCategory = (category) => {
    switch (category) {
      case "Entertainment":
        return require("./assets/apple.png");
      case "Music":
        return require("./assets/spotify.png");
      case "Transaction":
        return require("./assets/moneyTransfer.png");
      case "Shopping":
        return require("./assets/grocery.png");
      default:
        return require("./assets/apple.png");
    }
  };

  const getPriceColor = (index) => {
    switch (index) {
      case 0:
      case 1:
      case 3:
        return "black";
      case 2:
        return "blue";
      default:
        return "black";
    }
  };

  return (
    <View style={[styles.container, darkMode && styles.containerDark]}>
      <View style={styles.headerArea}>
        <Image
          source={require("./assets/profile.png")}
          style={styles.profileImage}
        />
        <View style={styles.header}>
          <Text style={[styles.headerText, darkMode && styles.textDark]}>
            Welcome back,
          </Text>
          <Text style={[styles.userName, darkMode && styles.textDark]}>
            Kwabena Afful
          </Text>
        </View>
        <View style={styles.iconBackground}>
          <Image
            source={require("./assets/search.png")}
            style={styles.searchIcon}
          />
        </View>
      </View>
      <Image source={require("./assets/Card.png")} style={styles.atmCard} />
      <View style={styles.actionItems}>
        {[
          { title: "Send", icon: require("./assets/send.png") },
          { title: "Receive", icon: require("./assets/recieve.png") },
          { title: "Loan", icon: require("./assets/loan.png") },
          { title: "Top Up", icon: require("./assets/topUp.png") },
        ].map((item) => (
          <View style={styles.actionItem} key={item.title}>
            <View style={styles.iconBackground}>
              <Image source={item.icon} style={styles.iconImage} />
            </View>
            <Text style={[styles.iconText, darkMode && styles.textDark]}>
              {item.title}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.transactionHeader}>
        <Text style={[styles.transText, darkMode && styles.textDark]}>
          Transaction
        </Text>
        <Text style={[styles.transSeeall, darkMode && styles.textblue]}>
          See All
        </Text>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.transactionItem}>
            <View style={styles.iconBackgroundTra}>
              <Image
                source={getIconForCategory(item.category)}
                style={styles.transactionIcon}
              />
            </View>
            <View style={styles.transactionDetails}>
              <View style={styles.transactionText}>
                <Text
                  style={[
                    styles.transactionTitle,
                    darkMode && styles.textDark,
                  ]}
                >
                  {item.title}
                </Text>
                <Text
                  style={[
                    styles.transactionCategory,
                    darkMode && styles.textGrey,
                  ]}
                >
                  {item.category}
                </Text>
              </View>
              <Text
                style={[
                  styles.transactionPrice,
                  { color: getPriceColor(index) },
                  darkMode && styles.textDark,
                ]}
              >
                {item.price < 0 ? "-" : "+"}${Math.abs(item.price)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50, 
  },
  containerDark: {
    backgroundColor: "#101930",
  },
  headerArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  actionItem: {
    alignItems: "center",
  },
  iconBackground: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  iconBackgroundTra: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20
  },
  iconImage: {
    width: 20,
    height: 20,
  },
  iconText: {
    marginTop: 10,
    fontSize: 14,
    color: "#000",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  header: {
    flex: 1,
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 16,
    opacity: 0.4,
  },
  userName: {
    fontSize: 22,
    fontWeight: "400",
  },
  textDark: {
    color: "white",
  },
  textGrey: {
    color: 'grey',
    opacity: 0.6
  },
  atmCard: {
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10,
    alignSelf: "center",
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  transactionIcon: {
    width: 20,
    height: 20,
  },
  transactionDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  transactionText: {
    flexDirection: "column",
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionCategory: {
    color: "gray",
  },
  transactionPrice: {
    fontSize: 16,
    marginLeft: 10,
  },
  expense: {
    color: "red",
  },
  income: {
    color: "green",
  },
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  transText: {
    fontSize: 20,
  },
  transSeeall: {
    color: "blue",
    fontSize: 16,
  },
});

export default HomeScreen;
