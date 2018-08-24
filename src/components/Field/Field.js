import React from "react";
import { StyleSheet, View } from "react-native";

import Hole from "./Hole";

import dim from "../../constants/dimensions";

const Field = ({ moles }) => {
  const { numCols, numRows } = dim;
  const renderHoles = [];

  // converts the row and column to an index
  const moleIdx = (r, c) =>
    r * numCols + c - Math.floor((r * numCols + c) / (numCols * 2));

  // create the array of holes
  for (let i = 0; i < numRows; i++) {
    renderHoles.push([]);
    for (let j = 0; j < numCols - (i % 2); j++) {
      const idx = moleIdx(i, j);
      const mole = { idx, ...moles[idx] };
      renderHoles[i].push(
        <Hole key={`hole${idx}`} style={styles.hole} mole={mole} />
      );
    }
  }
  return (
    <View style={styles.container}>
      {renderHoles.map((r, idx) => (
        <View
          key={`row-${idx}`}
          style={[styles.row, idx % 2 === 1 ? styles.rowOffset : null]}
        >
          {r.map(r => r)}
        </View>
      ))}
    </View>
  );
};

export default Field;

const styles = StyleSheet.create({
  container: {
    marginTop: -30
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10
  },
  // for even numbered rows that have one less hole
  rowOffset: {
    paddingHorizontal: dim.holeWidth / 2
  },
  hole: {}
});
