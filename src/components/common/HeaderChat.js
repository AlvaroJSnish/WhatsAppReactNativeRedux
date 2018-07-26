import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = props => (
  <View style={styles.container}>
    <Image source={{ uri: props.image }} style={styles.image} />
    <View style={{ flexDirection: "column" }}>
      <Text style={styles.textHeader}>{props.username}</Text>
      <Text style={styles.lastConnection}>
        Last connection: {props.lastConnection}
      </Text>
    </View>
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
    flexDirection: "row",
    position: "relative"
  },
  textHeader: {
    color: "black",
    fontSize: 20,
    marginLeft: 10
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  lastConnection: {
    marginLeft: 10,
    color: "grey"
  }
});
