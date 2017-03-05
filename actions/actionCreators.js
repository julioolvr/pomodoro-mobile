import {
  LENGTH_CHANGE,
  START_POMODORO,
  STOP_POMODORO,
  TICK,
  STORE_SCHEDULED_NOTIFICATION,
  CANCEL_CURRENT_NOTIFICATION
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
  };
}

export function stopPomodoro() {
  return {
    type: STOP_POMODORO
  };
}

export function tick(secondsElapsed) {
  return {
    type: TICK,
    payload: secondsElapsed
  };
}

export function storeScheduledNotification(id) {
  return {
    type: STORE_SCHEDULED_NOTIFICATION,
    payload: id
  };
}

export function cancelCurrentNotification() {
  return {
    type: CANCEL_CURRENT_NOTIFICATION
  };
}
