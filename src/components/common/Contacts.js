import React, { Component } from "react";
import { View, Text, Style, ScrollView } from "react-native";
import Header from "./Header";

import { connect } from "react-redux";
import Contact from "./Contact";
import { Actions } from "../../../node_modules/react-native-router-flux";

class Contacts extends Component {
  onPress(call) {
    return () => Actions.call(call);
  }

  render() {
    return (
      <View>
        <Header label="Contacts" />
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          {this.props.contacts.map(contact => (
            <Contact
              key={contact.number}
              {...contact}
              onPress={this.onPress.bind(this)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  calls: state.calls
});

export default connect(
  mapStateToProps,
  null
)(Contacts);
