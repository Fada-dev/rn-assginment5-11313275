import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  //   const transactions = [
  //     { id: 1, title: 'Apple Store', category: 'Entertainment', price: -5.99 },
  //     { id: 2, title: 'Spotify', category: 'Music', price: -12.99 },
  //     { id: 3, title: 'Money Transfer', category: 'Transaction', price: 300 },
  //     { id: 4, title: 'Grocery', category: 'Shopping', price: -88 },
  //   ];

  //   const getIconForCategory = (category) => {
  //     switch (category) {
  //       case 'Entertainment':
  //         return 'logo-apple';
  //       case 'Music':
  //         return 'logo-spotify';
  //       case 'Transaction':
  //         return 'cash-outline';
  //       case 'Shopping':
  //         return 'cart-outline';
  //       default:
  //         return 'help-circle-outline';
  //     }
  //   };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome back,</Text>
        <Text style={styles.headerText}>Eric Atsu</Text>
      </View>
      {/* <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <Ionicons name="search" size={20} color="gray" />
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.transactionItem}>
            <Ionicons
              name={getIconForCategory(item.category)}
              size={24}
              style={styles.icon}
            />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>{item.title}</Text>
              <Text style={styles.transactionCategory}>{item.category}</Text>
              <Text
                style={[
                  styles.transactionPrice,
                  item.price < 0 ? styles.expense : styles.income,
                ]}
              >
                {item.price < 0 ? "-" : "+"}${Math.abs(item.price)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    marginVertical: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  transactionDetails: {
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
    marginTop: 5,
    fontSize: 16,
  },
  expense: {
    color: "red",
  },
  income: {
    color: "green",
  },
});

export default HomeScreen;
