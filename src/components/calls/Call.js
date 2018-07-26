import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import AnimatedEllipsis from "react-native-animated-ellipsis";
import { Actions } from "react-native-router-flux";

export default class Call extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    this.ShowMessageWithDelay();
    this.ShowAlertWithDelay();
  }

  ShowAlertWithDelay = () => {
    setTimeout(() => {
      Actions.calls();
    }, 6000);
  };

  ShowMessageWithDelay() {
    setTimeout(() => {
      this.setState({ message: "Seems to be bussy now..." });
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.picture }} style={styles.image} />
        <Text style={styles.text}>Calling {this.props.user}</Text>
        <Text>{this.state.message}</Text>
        <AnimatedEllipsis style={styles.dots} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  text: {
    fontSize: 20,
    margin: 10
  },
  dots: {
    fontSize: 60
  }
});
