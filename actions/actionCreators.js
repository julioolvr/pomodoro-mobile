import { LENGTH_CHANGE, TOGGLE_RUNNING } from './actionTypes';

export function changeLength(newLength) {
  return {
    type: LENGTH_CHANGE,
    payload: newLength
  };
}

export function toggleRunning() {
  return {
    type: TOGGLE_RUNNING
  }
}
