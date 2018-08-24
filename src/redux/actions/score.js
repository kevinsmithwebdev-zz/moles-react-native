import { RESET_SCORE, WHACK_SCORE, MISS_SCORE } from "../actionNames";

export const resetScore = () => ({
  type: RESET_SCORE
});

export const whackScore = () => ({
  type: WHACK_SCORE
});

export const missScore = () => ({
  type: MISS_SCORE
});
