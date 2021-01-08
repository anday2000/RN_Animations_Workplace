import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ProgressBar from "./components/ProgressBar";
import FloatingButton from "./components/FloatingButton";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
