import {
  LENGTH_CHANGE,
  START_POMODORO,
  STOP_POMODORO
} from '../actions/actionTypes';

const initialState = {
  isRunning: false,
  pomodoroLength: 25
};

export default function pomodoroReducer(state = initialState, action) {
  switch (action.type) {
    case LENGTH_CHANGE:
      return { ...state, pomodoroLength: action.payload };
    case START_POMODORO:
      return { ...state, isRunning: true };
    case STOP_POMODORO:
      return { ...state, isRunning: false };
    default:
      return state;
  }
};
