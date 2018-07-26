import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => (
  <View style={styles.container}>
    <Text style={styles.textHeader}>{props.label}</Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    height: 63.5,
    borderBottomColor: "#b6b6b9",
    borderBottomWidth: 1,
    padding: 20,
    justifyContent: "center",
    alignContent: "center"
  },
  textHeader: {
    color: "black",
    fontSize: 20,
    alignSelf: "center"
  }
});
