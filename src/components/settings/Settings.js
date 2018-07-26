import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Button, Linking } from "react-native";

import { connect } from "react-redux";

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: this.props.profile.picture }}
          style={styles.image}
        />
        <Text style={styles.textName}>{this.props.profile.name}</Text>
        <Button
          onPress={() => Linking.openURL(this.props.profile.link)}
          title="My github!"
        />
        <Text style={styles.battlecry}>{this.props.profile.battlecry}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.settings
});

export default connect(
  mapStateToProps,
  null
)(Settings);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  textName: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 3
  },
  battlecry: {
    margin: 3,
    fontStyle: "italic"
  }
});
