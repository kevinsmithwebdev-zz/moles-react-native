import { combineReducers } from "redux";

import moles from "./moles";
import score from "./score";
import timer from "./timer";

const rootReducer = combineReducers({
  moles,
  score,
  timer
});

export default rootReducer;
