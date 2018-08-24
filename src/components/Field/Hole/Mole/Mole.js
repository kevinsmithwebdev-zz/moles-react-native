import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import dim from "../../../../constants/dimensions";

const iMole = require("../../../../images/mole.png");

const Mole = ({ handlePress, disabled }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={handlePress}
    disabled={disabled}
  >
    <Image source={iMole} style={styles.mole} />
  </TouchableOpacity>
);

export default Mole;

const styles = StyleSheet.create({
  container: {},
  mole: {
    width: dim.moleWidth,
    height: dim.moleHeight,
    zIndex: 10,
    paddingTop: 20
  }
});
