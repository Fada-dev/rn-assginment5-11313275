import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from './ThemeContext';

const SettingsScreen = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#101930' : '#fff' }]}>
      <ScrollView style={styles.settingsContainer}>
        <Text style={[styles.headerText, { color: darkMode ? '#fff' : '#000' }]}>Settings</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={[styles.settingTitle, { color: darkMode ? '#fff' : '#000' }]}>Language</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={[styles.settingTitle, { color: darkMode ? '#fff' : '#000' }]}>My Profile</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={[styles.settingTitle, { color: darkMode ? '#fff' : '#000' }]}>Contact Us</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={[styles.settingTitle, { color: darkMode ? '#fff' : '#000' }]}>Change Password</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={[styles.settingTitle, { color: darkMode ? '#fff' : '#000' }]}>Privacy Policy</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        
      </ScrollView>
      <View style={styles.settingItemTheme}>
          <Text style={[styles.settingTitle, { color: darkMode ? '#fff' : '#000' }]}>Theme</Text>
          <Switch
            value={darkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  settingsContainer: {
    marginVertical: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(45, 40, 73, 0.301)',
  },
  settingItemTheme: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: -110
  },
  settingTitle: {
    fontSize: 16,
  },
});

export default SettingsScreen;
