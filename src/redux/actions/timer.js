import { TICK_TIMER, STOP_TIMER } from "../actionNames";

let timer = null;

export const startTimer = () => dispatch => {
  clearInterval(timer);
  timer = setInterval(() => {
    dispatch(tickTimer());
  }, 1000);
  return { type: "" };
};

export const tickTimer = () => ({ type: TICK_TIMER });

export const stopTimer = () => {
  clearInterval(timer);
  return { type: STOP_TIMER };
};
