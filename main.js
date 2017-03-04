import Exponent from 'exponent';
import React from 'react';
import { Provider, connect } from 'react-redux';

import store from './store';
import PomodoroCounter from './components/PomodoroCounter';
import { changeLength, toggleRunning } from './actions/actionCreators';

const App = connect(({ pomodoro }) => ({
  isRunning: pomodoro.isRunning,
  length: pomodoro.pomodoroLength
}), {
  onLengthChanged: changeLength,
  onStartStopPressed: toggleRunning
})(PomodoroCounter);

Exponent.registerRootComponent(() => (
  <Provider store={store}>
    <App />
  </Provider>
));
