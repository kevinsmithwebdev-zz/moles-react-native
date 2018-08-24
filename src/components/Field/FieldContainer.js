import React from "react";

import Field from "./Field";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { startPop } from "../../redux/actions/moles";
import { startTimer, stopTimer } from "../../redux/actions/timer";

import dim from "../../constants/dimensions";
import { moleInterval } from "../../constants/timings";

class FieldContainer extends React.Component {
  state = { timer: null };

  localPopMole = () => {
    const { moles } = this.props;
    let emptyHoles = moles.filter(m => !m.isPopping);
    if (!emptyHoles.length) return;

    let moleNum = emptyHoles[Math.floor(Math.random() * emptyHoles.length)].idx;
    this.props.startPop(moleNum);
  };

  startGame = () => {
    this.localPopMole();
    const timer = setTimeout(() => {
      this.startGame();
    }, moleInterval(this.props.timer));
    this.setState({ timer });
  };

  stopGame = () => {
    this.props.stopTimer();
    clearInterval(this.state.timer);
    this.setState({ timer: null });
  };

  componentDidMount() {
    this.startGame();
    this.props.startTimer();
  }

  componentWillUnmount() {
    this.stopGame();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.timer > 0 && this.props.timer <= 0) this.stopGame();
  }

  render() {
    const { moles } = this.props;

    return <Field moles={moles} />;
  }
}

const mapStateToProps = state => {
  return { moles: state.moles, timer: state.timer };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      startPop,
      startTimer,
      stopTimer
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldContainer);
