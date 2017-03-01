import Exponent from 'exponent';
import React from 'react';

import PomodoroCounter from './components/PomodoroCounter';

class App extends React.Component {
  state = {
    isRunning: false
  }

  onStartStop() {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
  }

  render() {
    return (
      <PomodoroCounter
        isRunning={this.state.isRunning}
        onStartStopPressed={() => this.onStartStop()} />
    );
  }
}

Exponent.registerRootComponent(App);
