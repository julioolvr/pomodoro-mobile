import React from 'react';
import {
  View,
  Animated
} from 'react-native';

export default class extends React.Component {
  state = {
    backgroundAnimation: new Animated.Value(0)
  }

  componentWillReceiveProps(nextProps) {
    Animated.timing(
      this.state.backgroundAnimation,
      { toValue: nextProps.active ? 1 : 0 }
    ).start();
  }

  render() {
    const { active, fromColor, toColor, children, ...others } = this.props;

    // TODO: The animation seems sluggish in the simulator, good on iPhone 7.
    // Check if I'm doing something wrong, there has to be a way to make it more performant.
    const backgroundSize = this.state.backgroundAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1000]
    });

    return (
      <Animated.View {...others} >
        <View style={{
          backgroundColor: fromColor,
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
            backgroundColor: toColor,
            width: backgroundSize, // TODO: Maybe there is a way to use percentages somehow
            height: backgroundSize,
            borderRadius: 1000
          }} />
        </View>

        {children}
      </Animated.View>
    );
  }
}
