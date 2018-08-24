export const timerStart = 120;

const baseMoleInterval = 2000; // how long between moles
const intervalSpeedFactor = 5; // how much to speed up appearance rate by end of game

const baseMoleDuration = 5000; // how long a mole stays up
const durationSpeedFactor = 1.25; // how much to speed up moles disappearance time by end of game

const fudgeFactor = 0.2; // slight randomization in times

const fudge = () => 1 - fudgeFactor + (Math.random() * fudgeFactor) / 2; // to allow a little variable unpredictabilty
const speedFactor = (f, t1, t2) => fudge() / (f - ((f - 1) * t1) / t2); // to allow speed up

//* ************

export const moleDuration = t =>
  baseMoleDuration * speedFactor(durationSpeedFactor, t, timerStart);

export const moleInterval = t =>
  baseMoleInterval * speedFactor(intervalSpeedFactor, t, timerStart);
