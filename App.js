import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeProvider, ThemeContext } from './ThemeContext';  // Import the ThemeProvider

import HomeScreen from './HomeScreen';
import MyCardsScreen from './MyCardsScreen';
import StatisticsScreen from './StatisticsScreen';
import SettingsScreen from './SettingsScreen';

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
                  let iconName;

                  switch (route.name) {
                    case 'Home':
                      iconName = focused ? 'home' : 'home-outline';
                      break;
                    case 'My Cards':
                      iconName = focused ? 'card' : 'card-outline';
                      break;
                    case 'Statistics':
                      iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                      break;
                    case 'Settings':
                      iconName = focused ? 'settings' : 'settings-outline';
                      break;
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
              }}
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
    primary: 'white',
    background: 'black',
    card: 'gray',
    text: 'white',
    border: 'gray',
    notification: 'gray',
  },
};

const lightTheme = {
  dark: false,
  colors: {
    primary: 'black',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'gray',
    notification: 'gray',
  },
};

export default App;
