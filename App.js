import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

import HomeScreen from './HomeScreen';
import MyCardsScreen from './MyCardsScreen';
import StatisticsScreen from './StatisticsScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.NavContainer}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;

            switch (route.name) {
              case 'Home':
                iconSource = focused ? require('./assets/home.png') : require('./assets/home.png');
                break;
              case 'My Cards':
                iconSource = focused ? require('./assets/myCards.png') : require('./assets/myCards.png');
                break;
              case 'Statistics':
                iconSource = focused ? require('./assets/statictics.png') : require('./assets/statictics.png');
                break;
              case 'Settings':
                iconSource = focused ? require('./assets/settings.png') : require('./assets/settings.png');
                break;
              default:
                break;
            }

            return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
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
  );
};

const styles = StyleSheet.create({
  NavContainer: {
    marginBottom: 50,
  },
});

export default App;
