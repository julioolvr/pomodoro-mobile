import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7453F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  running: {
    backgroundColor: '#00CB50'
  },
  stopped: {
    backgroundColor: '#E7453F'
  }
});

export default class extends React.Component {
  render() {
    const { isRunning, onStartStopPressed } = this.props;

    return (
      <View
        style={[styles.container, isRunning ? styles.running : styles.stopped]} >
        <Text>The pomodor</Text>
        <Button
          title={isRunning ? 'Stop' : 'Start'}
          onPress={onStartStopPressed} />
      </View>
    );
  }
}
