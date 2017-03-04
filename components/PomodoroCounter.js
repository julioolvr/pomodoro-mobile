import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  View
} from 'react-native';

import Ticker from '../ticker';
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
  state = {
    ticker: null
  }

  start() {
    this.setState((prevState, props) => {
      props.onStart();

      return {
        ticker: new Ticker(newSecond => {
          props.onSecondPassed(newSecond);

          if (newSecond >= props.length * 60) {
            this.stop();
          }
        })
      };
    })
  }

  stop() {
    this.setState((prevState, props) => {
      props.onStop();

      if (prevState.ticker) {
        prevState.ticker.cancel();
      }

      return {
        ticker: null
      };
    })
  }

  render() {
    const {
      isRunning,
      length,
      onStart,
      onStop,
      onLengthChanged
    } = this.props;

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
            editable={!isRunning}
            style={[styles.mainText, { height: 40 }]}/>

          <Text style={styles.mainText}>minutes Pomodoro</Text>
        </View>

        <Button
          title={isRunning ? 'Stop' : 'Start'}
          onPress={isRunning ?
            (() => this.stop()) :
            (() => this.start())} />
      </AnimatedBackgroundView>
    );
  }
}
