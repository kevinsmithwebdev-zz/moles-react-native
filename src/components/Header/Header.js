import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import dim from "../../constants/dimensions";

const iHeaderBG = require("../../images/game-screen-top.png");
const iButton = require("../../images/gameBtn.png");

const timerToTime = t => `${Math.floor(t / 60)}:${`0${t % 60}`.slice(-2)}`;

const Header = ({ score, timer }) => (
  <View style={styles.container}>
    <Image source={iHeaderBG} style={styles.bg} />

    <View style={styles.scoreWrapper}>
      <Image source={iButton} style={styles.button} />
      <Text style={styles.buttonText}>{score}</Text>
    </View>

    <View style={styles.timeWrapper}>
      <Image source={iButton} style={styles.button} />
      <Text style={styles.buttonText}>{timerToTime(timer)}</Text>
    </View>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {},
  bg: {
    width: dim.headerWidth,
    height: dim.headerHeight
  },

  scoreWrapper: {
    position: "absolute",
    top: dim.buttonTop,
    left: dim.buttonEdge
  },
  timeWrapper: {
    position: "absolute",
    top: dim.buttonTop,
    right: dim.buttonEdge
  },

  button: {
    width: dim.buttonWidth,
    height: dim.buttonHeight
  },

  buttonText: {
    position: "absolute",
    fontSize: dim.fontSize,
    width: "100%",
    textAlign: "center"
  }
});
