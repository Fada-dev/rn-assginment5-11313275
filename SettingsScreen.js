import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingTitle}>Language</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingTitle}>My Profile</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingTitle}>Contact Us</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingTitle}>Change Password</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingTitle}>Privacy Policy</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>Theme</Text>
          <Switch
            value={darkMode}
            onValueChange={(value) => setDarkMode(value)}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  settingTitle: {
    fontSize: 16,
  },
});

export default SettingsScreen;
