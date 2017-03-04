import {
  LENGTH_CHANGE,
  START_POMODORO,
  STOP_POMODORO,
  TICK
} from './actionTypes';

export function changeLength(newLength) {
  return {
    type: LENGTH_CHANGE,
    payload: newLength
  };
}

export function startPomodoro() {
  return {
    type: START_POMODORO
  }
}

export function stopPomodoro() {
  return {
    type: STOP_POMODORO
  }
}

export function tick(secondsElapsed) {
  return {
    type: TICK,
    payload: secondsElapsed
  };
}
