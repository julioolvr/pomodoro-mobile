import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  View
} from 'react-native';
import { Notifications, Permissions } from 'exponent';

import Ticker from '../utils/ticker';
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
    const { length, storeScheduledNotification } = this.props;

    Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

    Notifications.scheduleLocalNotificationAsync({
      title: 'Pomodoro Mobile',
      body: 'Your pomodoro is over! 🍅'
    }, {
      time: (new Date()).getTime() + 1000 * 60 * length
    }).then(storeScheduledNotification);

    this.setState((prevState, props) => {
      const { onStart, onSecondPassed, length } = props;
      onStart();

      return {
        ticker: new Ticker(newSecond => {
          onSecondPassed(newSecond);

          if (newSecond >= length * 60) {
            this.stop();
          }
        })
      };
    })
  }

  stop() {
    this.setState((prevState, props) => {
      const { onStop, cancelCurrentNotification, currentNotificationId } = props;
      onStop();

      if (prevState.ticker) {
        prevState.ticker.cancel();
      }

      if (currentNotificationId) {
        // TODO: Right now, if the application is killed before the pomodoro ends,
        // the notification stays scheduled. If the user starts the app again, and
        // starts a new Pomodoro, the old notification will still show up even
        // though the new Pomodoro hasn't been finished yet.
        // Probably the best way to handle this is to persist app state when it is
        // closed so if a Pomodoro had been started before, it can be resumed as if
        // the app was never closed.
        Notifications.cancelScheduledNotificationAsync(currentNotificationId);
        cancelCurrentNotification();
      }

      return {
        ticker: null,
        scheduledNotification: null
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
