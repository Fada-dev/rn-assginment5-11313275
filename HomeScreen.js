import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Image source={require("./assets/profile.png")} style={styles.profileImage} />
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome back,</Text>
          <Text style={styles.userName}>Eric Atsu</Text>
        </View>
        <Image source={require("./assets/search.png")} style={styles.searchIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50, 
  },
  headerArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 40,
    height: 40,
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
    fontWeight: '400',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
});

export default HomeScreen;
