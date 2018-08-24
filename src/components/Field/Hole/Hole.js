import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import dim from "../../../constants/dimensions";

import Mole from "./Mole";

const iHole = require("../../../images/hole.png");
const iHoleMask = require("../../../images/holeMask.png");

const Hole = ({ mole }) => (
  <View style={styles.container} removeClippedSubviews>
    <Image source={iHole} style={styles.hole} />

    <Mole mole={mole} />

    <Image source={iHoleMask} style={styles.holeMask} />
  </View>
);

export default Hole;

const styles = StyleSheet.create({
  container: {
    width: dim.holeWidth,
    height: dim.holeHeight,
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 0
  },
  hole: {
    width: dim.holeWidth,
    height: dim.holeHeight / 2,
    position: "absolute",
    bottom: 0,
    zIndex: 1
  },
  holeMask: {
    width: dim.maskWidth,
    height: dim.maskHeight,
    position: "absolute",
    bottom: 0,
    zIndex: 3
  }
});
