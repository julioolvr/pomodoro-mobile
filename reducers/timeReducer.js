import { TICK, START_POMODORO, STOP_POMODORO } from '../actions/actionTypes';

import Ticker from '../ticker';

const initialState = { secondsElapsed: 0 };

export default function timeReducer(state = initialState, action) {
  switch (action.type) {
  case TICK:
    return { ...state, secondsElapsed: state.secondsElapsed + 1 };
  case STOP_POMODORO:
    return { ...state, secondsElapsed: 0 };
  }

  return state;
}
