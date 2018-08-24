import { RESET_SCORE, WHACK_SCORE, MISS_SCORE } from "../actionNames";

const initialState = 0;

const scoreWhack = 10;
const scoreMiss = 3;

const score = (state = initialState, action) => {
  switch (action.type) {
    case RESET_SCORE:
      return initialState;

    case WHACK_SCORE:
      return state + scoreWhack;

    case MISS_SCORE:
      return state - scoreMiss;

    default:
      return state;
  }
};

export default score;
