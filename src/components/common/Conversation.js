import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const Conversation = props => (
  <TouchableOpacity style={styles.container} onPress={props.onPress(props)}>
    <Image source={{ uri: props.picture }} style={styles.image} />
    <View style={styles.chat}>
      <View style={styles.info}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.userText}>{props.user}</Text>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={[
                styles.messageText,
                { alignSelf: "center", paddingRight: 55 }
              ]}
            >
              {props.lastMessageDate}
            </Text>
            <Text>
              <Ionicons
                name="ios-arrow-forward-outline"
                size={15}
                color="grey"
              />
            </Text>
          </View>
        </View>
        <Text style={styles.messageText}>{props.lastMessage}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default Conversation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 10
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: 10
  },
  chat: {
    borderBottomColor: "#bdc3c7",
    borderBottomWidth: 0.8,
    width: "100%"
  },
  info: {
    flexDirection: "column",
    margin: 10,
    marginTop: 4
  },
  userText: {
    fontSize: 20,
    opacity: 1,
    color: "black",
    fontWeight: "bold"
  },
  messageText: {
    color: "grey"
  }
});
