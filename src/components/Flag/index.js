import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Flag = ({ flag }) => {
  if (flag === "Spicy") {
    return <Text style={styles.spicy}>{flag}</Text>;
  }
  return <Text style={styles.normal}>{flag}</Text>;
};

export default Flag;

const styles = StyleSheet.create({
  spicy: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red"
  },
  normal: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue"
  }
});
