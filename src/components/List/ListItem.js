import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const ListItem = ({ text }) => (
  <TouchableOpacity style={styles.row}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default ListItem;
