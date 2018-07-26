import React, { Component } from "react";
import { ScrollView } from "react-native";

import Conversation from "../common/Conversation";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

class Chats extends Component {
  static defaultProps = {
    chats: []
  };

  navigateToChat(chat) {
    return () => Actions.chat(chat);
  }

  render() {
    return (
      <ScrollView>
        {this.props.chats.map(chat => (
          <Conversation
            key={chat.id}
            {...chat}
            onPress={this.navigateToChat.bind(this)}
          />
        ))}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  chats: state.chats
});

export default connect(
  mapStateToProps,
  null
)(Chats);
