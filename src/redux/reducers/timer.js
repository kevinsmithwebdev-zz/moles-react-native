import { TICK_TIMER, STOP_TIMER } from "../actionNames";
import { timerStart } from "../../constants/timings";

const initialState = timerStart;

const timer = (state = initialState, action) => {
  switch (action.type) {
    case STOP_TIMER:
      return 0;

    case TICK_TIMER:
      return state - 1;

    default:
      return state;
  }
};

export default timer;
