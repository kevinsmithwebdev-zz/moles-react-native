import React, { Component } from "react";
import { Animated, Image, Easing } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { resetPop, setWhacked } from "../../../../redux/actions/moles";
import { whackScore, missScore } from "../../../../redux/actions/score";

import Mole from "./Mole";

import { moleDuration } from "../../../../constants/timings";
import dim from "../../../../constants/dimensions";

const iMole = require("../../../../images/mole.png");

class MoleContainer extends Component {
  constructor() {
    super();
    this.state = { isWhacked: false };
    this.animatedMoleHeight = new Animated.Value(0);
  }

  endPop = () => {
    if (!this.state.isWhacked) this.props.missScore();

    this.setState({ isWhacked: false });
    this.props.resetPop(this.props.mole.idx);
  };

  popUp = () => {
    this.animatedMoleHeight.setValue(0);
    Animated.timing(this.animatedMoleHeight, {
      toValue: 1,
      duration: moleDuration(this.props.timer),
      easing: Easing.quad
    }).start(this.endPop);
  };

  handlePress = () => {
    this.props.whackScore();
    this.setState({ isWhacked: true }, () => {
      Animated.timing(this.animatedMoleHeight).reset();
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.mole.isPopping && !prevProps.mole.isPopping) this.popUp();
  }

  render() {
    const { mole } = this.props;
    const popGoesTheMole = this.animatedMoleHeight.interpolate({
      inputRange: [0, 0.1, 0.9, 1],
      outputRange: [
        dim.moleDownPos,
        dim.moleUpPos,
        dim.moleUpPos,
        dim.moleDownPos
      ]
    });

    return (
      <Animated.View style={{ paddingTop: popGoesTheMole }}>
        <Mole handlePress={this.handlePress} disabled={this.state.isWhacked} />
      </Animated.View>
    );
  }
}

const mapStateToProps = state => {
  return { timer: state.timer };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      resetPop,
      whackScore,
      missScore
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoleContainer);

// const styles = StyleSheet.create({
//
// })
