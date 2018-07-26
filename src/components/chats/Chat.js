import React, { Component } from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";

import HeaderChat from "../common/HeaderChat";
import Form from "../common/Form";

import { connect } from "react-redux";
import { addMessage } from "../../actions/ChatsActions";

class Chat extends Component {
  state = {
    newMessage: "",
    messages: this.props.messages
  };

  renderMessage(text, i) {
    if (text.user === "Me") {
      return (
        <View key={i} style={styles.ownContainer}>
          <Text style={styles.ownMessage}>{text.message}</Text>
        </View>
      );
    } else {
      return (
        <View key={i} style={styles.foreignContainer}>
          <Text style={styles.ownMessage}>{text.message}</Text>
        </View>
      );
    }
  }

  onAddMessage() {
    const message = this.state.newMessage;

    if (message.length === 0) {
      return null;
    } else {
      return () => {
        this.setState({
          messages: [
            ...this.state.messages,
            { user: "Me", message: this.state.newMessage }
          ],
          newMessage: ""
        });
        this.props.addMessage(this.props.id, this.state.newMessage);
      };
    }
  }

  onChangeInput(text) {
    this.setState({ newMessage: text });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderChat
          image={this.props.picture}
          username={this.props.user}
          lastConnection={this.props.lastConnection}
        />
        <ScrollView
          contentContainerStyle={{
            justifyContent: "space-between"
          }}
        >
          {this.state.messages.map((text, i) => this.renderMessage(text, i))}
        </ScrollView>
        <Form
          onPressButton={this.onAddMessage.bind(this)}
          id={this.props.id}
          onChangeText={this.onChangeInput.bind(this)}
          value={this.state.newMessage}
        />
      </View>
    );
  }
}

export default connect(
  null,
  { addMessage }
)(Chat);

const styles = StyleSheet.create({
  ownContainer: {
    borderRadius: 5,
    backgroundColor: "lightgreen",
    width: 200,
    alignSelf: "flex-end",
    margin: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    padding: 10
  },
  ownMessage: {
    fontSize: 15
  },
  foreignContainer: {
    borderRadius: 5,
    backgroundColor: "#f7f7f7",
    width: 200,
    marginLeft: 10,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    padding: 10,
    margin: 2
  },
  foreignMessage: {
    fontSize: 15
  }
});
