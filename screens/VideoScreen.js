import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

export default function VideoScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search videos..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Video Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
