import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Header from "./Header";
import Field from "./Field";

class Root extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Field />
      </View>
    );
  }
}

export default Root;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c9bf9c",
    flex: 1
  }
});
