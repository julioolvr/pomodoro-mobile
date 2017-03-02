import React from 'react';
import {
  StyleSheet,
  Text,
  Button
} from 'react-native';

import AnimatedBackgroundView from './AnimatedBackgroundView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class extends React.Component {
  render() {
    const { isRunning, onStartStopPressed } = this.props;

    const stoppedBackgroundColor = '#E7453F';
    const runningBackgroundColor = '#00CB50';

    return (
      <AnimatedBackgroundView
        fromColor={stoppedBackgroundColor}
        toColor={runningBackgroundColor}
        active={isRunning}
        style={styles.container} >

        <Text>The pomodor</Text>

        <Button
          title={isRunning ? 'Stop' : 'Start'}
          onPress={onStartStopPressed} />
      </AnimatedBackgroundView>
    );
  }
}
