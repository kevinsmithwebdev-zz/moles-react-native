import React from "react";

import { Text } from "react-native";
import Hole from "./Hole";

class HoleContainer extends React.Component {
  render() {
    const { mole } = this.props;
    return <Hole mole={mole} />;
  }
}

export default HoleContainer;
