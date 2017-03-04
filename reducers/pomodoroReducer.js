import { LENGTH_CHANGE, TOGGLE_RUNNING } from '../actions/actionTypes';

const initialState = {
  isRunning: false,
  pomodoroLength: 25
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LENGTH_CHANGE:
      return { ...state, pomodoroLength: action.payload };
    case TOGGLE_RUNNING:
      return { ...state, isRunning: !state.isRunning };
    default:
      return state;
  }
};
