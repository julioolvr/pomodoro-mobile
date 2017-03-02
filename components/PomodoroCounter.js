import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  View
} from 'react-native';

import AnimatedBackgroundView from './AnimatedBackgroundView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    textAlign: 'center'
  }
});

export default class extends React.Component {
  render() {
    const { isRunning, length, onStartStopPressed, onLengthChanged } = this.props;

    const stoppedBackgroundColor = '#E7453F';
    const runningBackgroundColor = '#00CB50';

    return (
      <AnimatedBackgroundView
        fromColor={stoppedBackgroundColor}
        toColor={runningBackgroundColor}
        active={isRunning}
        style={styles.container} >

        <View>
          <Text style={styles.mainText}>Start a</Text>

          <TextInput
            value={length.toString()}
            onChangeText={text => onLengthChanged(Number(text))}
            keyboardType="numeric"
            style={[styles.mainText, { height: 40 }]}/>

          <Text style={styles.mainText}>minutes Pomodoro</Text>
        </View>

        <Button
          title={isRunning ? 'Stop' : 'Start'}
          onPress={onStartStopPressed} />
      </AnimatedBackgroundView>
    );
  }
}
