import Exponent from 'exponent';
import React from 'react';

import PomodoroCounter from './components/PomodoroCounter';

class App extends React.Component {
  state = {
    isRunning: false,
    pomodoroLength: 25
  }

  onStartStop() {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
  }

  onLengthChanged(newLength) {
    this.setState({
      pomodoroLength: newLength
    })
  }

  render() {
    return (
      <PomodoroCounter
        length={this.state.pomodoroLength}
        onLengthChanged={newLength => this.onLengthChanged(newLength)}
        isRunning={this.state.isRunning}
        onStartStopPressed={() => this.onStartStop()} />
    );
  }
}

Exponent.registerRootComponent(App);
