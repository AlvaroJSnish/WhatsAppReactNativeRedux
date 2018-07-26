import React, { Component } from "react";
import {
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Form = props => (
  <KeyboardAvoidingView style={styles.container} behavior="padding">
    <TextInput
      style={styles.input}
      value={props.value}
      onChangeText={props.onChangeText}
    />
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPressButton(props.id, props.value)}
    >
      <View>
        <Ionicons name="ios-arrow-dropright-circle" size={30} color="blue" />
      </View>
    </TouchableOpacity>
  </KeyboardAvoidingView>
);

export default Form;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#f7f7f7",
    alignContent: "center",
    flexDirection: "row"
  },
  input: {
    margin: 10,
    backgroundColor: "lightgrey",
    width: 300,
    borderRadius: 10,
    padding: 3
  },
  button: {
    margin: 10
  }
});
