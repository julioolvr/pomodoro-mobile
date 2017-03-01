import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Animated
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class extends React.Component {
  state = {
    backgroundAnimation: new Animated.Value(0)
  }

  componentWillReceiveProps(nextProps) {
    Animated.timing(
      this.state.backgroundAnimation,
      { toValue: nextProps.isRunning ? 1 : 0 }
    ).start();
  }

  render() {
    const { isRunning, onStartStopPressed } = this.props;

    // TODO: The animation seems sluggish in the simulator, check on real phone.
    // Also check what I'm doing wrong, there has to be a way to do it more performant.
    const backgroundSize = this.state.backgroundAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1000]
    });

    const stoppedBackgroundColor = '#E7453F';
    const runningBackgroundColor = '#00CB50';

    return (
      <Animated.View
        style={styles.container} >
        <View style={{
          backgroundColor: stoppedBackgroundColor,
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }} />
        <View style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Animated.View style={{
            backgroundColor: runningBackgroundColor,
            width: backgroundSize, // TODO: Maybe there is a way to use percentages somehow
            height: backgroundSize,
            borderRadius: 1000
          }} />
        </View>

        <Text>The pomodor</Text>

        <Button
          title={isRunning ? 'Stop' : 'Start'}
          onPress={onStartStopPressed} />
      </Animated.View>
    );
  }
}
