import React from "react";
import { connect } from "react-redux";

import Header from "./Header";

import dim from "../../constants/dimensions";

class HeaderContainer extends React.Component {
  render() {
    const { score, timer } = this.props;
    return <Header score={score} timer={timer} />;
  }
}

const mapStateToProps = state => ({ score: state.score, timer: state.timer });

export default connect(mapStateToProps)(HeaderContainer);
