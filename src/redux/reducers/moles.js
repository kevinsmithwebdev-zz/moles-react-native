import { START_POP, RESET_POP } from "../actionNames";
import dim from "../../constants/dimensions";

const initMole = { isPopping: false };

const initialState = Array.from({ length: dim.numMoles }, (m, idx) => ({
  ...initMole,
  idx
}));

const score = (state = initialState, action) => {
  switch (action.type) {
    case START_POP:
      const newStartState = [...state];
      newStartState[action.payload.moleNum].isPopping = true;
      return newStartState;

    case RESET_POP:
      const newResetState = [...state];
      newResetState[action.payload.moleNum] = {
        ...initMole,
        idx: action.payload.moleNum
      };
      return newResetState;

    default:
      return state;
  }
};

export default score;
