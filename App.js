import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { ThemeProvider, ThemeContext } from "./ThemeContext";

import HomeScreen from "./HomeScreen";
import MyCardsScreen from "./MyCardsScreen";
import StatisticsScreen from "./StatisticsScreen";
import SettingsScreen from "./SettingsScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ darkMode }) => (
          <NavigationContainer theme={darkMode ? darkTheme : lightTheme}>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconSource;

                  switch (route.name) {
                    case 'Home':
                      iconSource = require('./assets/home.png');
                      break;
                    case 'My Cards':
                      iconSource = require('./assets/myCards.png');
                      break;
                    case 'Statistics':
                      iconSource = require('./assets/statistics.png');
                      break;
                    case 'Settings':
                      iconSource = require('./assets/settings.png');
                      break;
                    default:
                      break;
                  }

                  return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
                },
                tabBarActiveTintColor: darkMode ? 'white' : 'blue',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                  backgroundColor: darkMode ? 'black' : 'white',
                },
              })}
            >
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="My Cards" component={MyCardsScreen} />
              <Tab.Screen name="Statistics" component={StatisticsScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

const darkTheme = {
  dark: true,
  colors: {
    primary: "white",
    background: "black",
    card: "gray",
    text: "white",
    border: "gray",
    notification: "gray",
  },
};

const lightTheme = {
  dark: false,
  colors: {
    primary: "black",
    background: "white",
    card: "white",
    text: "black",
    border: "gray",
    notification: "gray",
  },
};

export default App;
