import Exponent from 'exponent';
import React from 'react';
import { Provider, connect } from 'react-redux';

import store from './store';
import PomodoroCounter from './components/PomodoroCounter';
import {
  changeLength,
  startPomodoro,
  stopPomodoro,
  tick,
  storeScheduledNotification,
  cancelCurrentNotification
} from './actions/actionCreators';

const App = connect(({ pomodoro, notifications }) => ({
  isRunning: pomodoro.isRunning,
  length: pomodoro.pomodoroLength,
  currentNotificationId: notifications.notificationId
}), {
  onLengthChanged: changeLength,
  onSecondPassed: tick,
  onStart: startPomodoro,
  onStop: stopPomodoro,
  storeScheduledNotification,
  cancelCurrentNotification
})(PomodoroCounter);

Exponent.registerRootComponent(() => (
  <Provider store={store}>
    <App />
  </Provider>
));
