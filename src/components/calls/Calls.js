import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

import { ButtonGroup } from "react-native-elements";

import { connect } from "react-redux";
import CallInfo from "../common/CallInfo";

class Calls extends Component {
  static defaultProps = {
    calls: []
  };

  state = {
    index: 0
  };

  updateIndex = index => {
    this.setState({ index });
  };

  renderCalls(calls) {
    if (this.state.index === 0) {
      return (
        <ScrollView style={{ height: "100%" }}>
          {calls.map(call => (
            <CallInfo
              key={call.id}
              {...call}
              onPress={this.onPress.bind(this)}
            />
          ))}
        </ScrollView>
      );
    }
    return (
      <ScrollView style={{ height: "100%" }}>
        {calls.map(call => {
          if (call.lost) {
            return (
              <CallInfo
                key={call.id}
                {...call}
                onPress={this.onPress.bind(this)}
              />
            );
          }
        })}
      </ScrollView>
    );
  }

  onPress(call) {
    return () => Actions.call(call);
  }

  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity onPress={() => Actions.contacts()}>
            <View>
              <Text style={{ color: "#0fbcf9" }}>New</Text>
            </View>
          </TouchableOpacity>
          <ButtonGroup
            selectedBackgroundColor="red"
            onPress={this.updateIndex}
            selectedIndex={this.state.index}
            buttons={["All", "Lost"]}
            containerStyle={{
              height: 30,
              width: 200,
              alignSelf: "center"
            }}
          />
        </View>
        {this.renderCalls(this.props.calls)}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  calls: state.calls
});

export default connect(
  mapStateToProps,
  null
)(Calls);
