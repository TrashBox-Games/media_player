import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchBar from "../components/SearchBar";

// Create the top tab navigator
const TopTab = createMaterialTopTabNavigator();

// Create components for each tab
function SongsTab() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.tabContainer}>
      <SearchBar
        placeholder="Search songs..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Songs List</Text>
      </View>
    </View>
  );
}

function AlbumsTab() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.tabContainer}>
      <SearchBar
        placeholder="Search albums..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Albums List</Text>
      </View>
    </View>
  );
}

function GenresTab() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.tabContainer}>
      <SearchBar
        placeholder="Search genres..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Genres List</Text>
      </View>
    </View>
  );
}

// Main AudioScreen component with top tabs
export default function AudioScreen() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: { backgroundColor: "#007AFF" },
        tabBarLabelStyle: { fontWeight: "bold" },
      }}
    >
      <TopTab.Screen name="Songs" component={SongsTab} />
      <TopTab.Screen name="Albums" component={AlbumsTab} />
      <TopTab.Screen name="Genres" component={GenresTab} />
    </TopTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
