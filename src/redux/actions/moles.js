import { START_POP, RESET_POP } from "../actionNames";

export const startPop = moleNum => ({
  type: START_POP,
  payload: { moleNum }
});

export const resetPop = moleNum => ({
  type: RESET_POP,
  payload: { moleNum }
});
